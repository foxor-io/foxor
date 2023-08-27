import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="px-6 py-20 -mx-6 rounded-4xl bg-neutral-950 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Be on of the first to truly <b>experience streaming</b>
            </h2>
            <div className="mt-6">
              <h3 className="mb-6 text-base font-semibold text-white font-display">
                Reserve your username now and you have early access and your first month of premium free on us!
              </h3>
              <Button href="/contact" invert>
                Reserve 
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
