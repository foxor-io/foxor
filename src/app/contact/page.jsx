import Link from 'next/link'

import { Border } from '@/components/Border'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import ContactForm from './contact-form';



function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}
function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="text-base font-semibold font-display text-neutral-950">
        First come, First serve
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Don't miss your chance to be one of the first 1,000 users on Foxor. Reserve your username now for free.
      </p>

      <Border className="pt-16 mt-16">
        <h2 className="text-base font-semibold font-display text-neutral-950">
          Email us
        </h2>
        <dl className="grid grid-cols-1 gap-8 mt-6 text-sm sm:grid-cols-2">
          {[
            ['Careers', 'careers@foxor.io'],
            ['News', 'newsletter@foxor.io'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="pt-16 mt-16">
        <h2 className="text-base font-semibold font-display text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Reserve',
  description: "Don't miss out, reserve your username now",
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Reserve" title="Reserve your handle now!">
        <p>Don't miss out, reserve your username now</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
