create table public.waitlist (
  username varchar(40) primary key,
  email text,
  streamer boolean default false, -- Whether or not the user marked that they are interested in being a streamer
  marketing_updates boolean default true, -- Whether or not the user has opted into marketing updates
  created_at timestamptz default now()
);

-- Usernames need to meet the following requirements:
-- 1. Must be at least 1 character
-- 2. Must be at most 40 characters
-- 3. Must contain only alphanumeric/underscore characters
create or replace function public.is_valid_username(username varchar)
returns boolean as
$$
begin
  return username ~ '^[a-zA-Z0-9_]{1,40}$';
end;
$$ language plpgsql;

alter table public.waitlist add constraint check_valid_username
check (public.is_valid_username(username));

-- Usernames are case sensitive, but must be case-sensitively unique
create unique index waitlist_unique_username_idx
on public.waitlist (lower(username));


-- Set up Row-level Security
alter table public.waitlist enable row level security;

-- Only allow inserting into the waitlist table
create policy "Anyone can join the waitlist"
on public.waitlist
for select
to public
using (true);


-- Stats view for the waitlist table
create view public.waitlist_stats as
select
  count(*) as total_people,
  sum(case when streamer then 1 else 0 end) as total_streamers,
  sum(case when not streamer then 1 else 0 end) as total_non_streamers
from public.waitlist;

-- Helper function to determine if a username is available
create or replace function is_username_available(new_username varchar)
returns boolean as
$$
begin
  return public.is_valid_username(new_username) and not exists(select 1 from public.waitlist where lower(username) = lower(new_username));
end;
$$ language plpgsql;