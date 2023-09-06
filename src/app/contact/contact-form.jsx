'use client';

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useId, useState } from 'react'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="relative z-0 transition-all group focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="block w-full px-6 pt-12 pb-4 transition bg-transparent border peer border-neutral-300 text-base/6 text-neutral-950 ring-4 ring-transparent focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {

  const supabase = createClientComponentClient();

  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const stripped_handle = handle.replace('@','');

    const { data: is_available } = await supabase.rpc('is_username_available', { new_username: stripped_handle });
    if(is_available) {
      const { error } = await supabase.from('waitlist').insert({ username: stripped_handle, email });
      if(!error) {
        alert('Thank you for your reservation!');
        setEmail('');
        setHandle('');
      }
      else {
        alert('This email is already associated with another handle');
      }
    }
    else {
      alert('Handle is not available');
    }

  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-base font-semibold font-display text-neutral-950">
          Get your handle now
        </h2>
        <div className="mt-6 -space-y-px isolate rounded-2xl bg-white/50">
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            label="Handle"
            name="handle"
            autoComplete="handle"
            pattern="^@?[a-zA-Z0-9_]{1,40}$"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            required
          />
        </div>

        <div className="mt-4">
          <h3 className="text-sm text-neutral-700">Handles must only contain alphanumeric characters and underscores.</h3>
        </div>

        <Button type="submit" className="mt-10">
          Reserve Handle
        </Button>
      </form>
    </FadeIn>
  )
}

export default ContactForm;