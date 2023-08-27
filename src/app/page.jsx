import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

//TODO make this a list of content creators
const clients = [
  ['Mr Beast', logoPhobiaLight],
  ['SuperCarlinBrothers', logoFamilyFund],
  ['Speed', logoUnseal],
  ['Dream', logoMailSmirk],
  ['Sapnap', logoHomeWork],
  ['Flats', logoGreenLife],
  ['Dude Perfect', logoBrightPath],
  ['Many More', logoNorthAdventures],
]

//TODO make caseStudies into some research articles. all are inside the work folder in mdx format

function Clients() {
  return (
    <div className="py-20 mt-24 rounded-4xl bg-neutral-950 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-sm font-semibold tracking-wider text-center text-white font-display sm:text-left">
            We’re partnering with some of your favorite creators
          </h2>
          <div className="flex-auto h-px bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="grid grid-cols-2 mt-10 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <div className="text-xl font-semibold text-white">{client}</div>
                  {/* <Image src={logo} alt={client} unoptimized /> */}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

// function CaseStudies({ caseStudies }) {
//   return (
//     <>
//       <SectionIntro
//         title="Harnessing the power of visionPro for a more connected future"
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           We believe the future of realtime communication and content sharing lies 
//           in the Foxor, a platform built from the ground up with 3D experience and rendering. See some of our research  
//           how Foxor is poised to revolutionize live streaming.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {caseStudies.map((caseStudy) => (
//             <FadeIn key={caseStudy.href} className="flex">
//               <article className="relative flex flex-col w-full p-6 transition rounded-3xl ring-1 ring-neutral-950/5 hover:bg-neutral-50 sm:p-8">
//                 <h3>
//                   <Link href={caseStudy.href}>
//                     <span className="absolute inset-0 rounded-3xl" />
//                     <Image
//                       src={caseStudy.logo}
//                       alt={caseStudy.client}
//                       className="w-16 h-16"
//                       unoptimized
//                     />
//                   </Link>
//                 </h3>
//                 <p className="flex mt-6 text-sm gap-x-2 text-neutral-950">
//                   <time dateTime={caseStudy.year} className="font-semibold">
//                     {caseStudy.date.split('-')[0]}
//                   </time>
//                   <span className="text-neutral-300" aria-hidden="true">
//                     /
//                   </span>
//                   <span>Case study</span>
//                 </p>
//                 <p className="mt-6 text-2xl font-semibold font-display text-neutral-950">
//                   {caseStudy.title}
//                 </p>
//                 <p className="mt-4 text-base text-neutral-600">
//                   {caseStudy.description}
//                 </p>
//               </article>
//             </FadeIn>
//           ))}
//         </FadeInStagger>
//       </Container>
//     </>
//   )
// }

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Investment Oppurtunities"
        title="We are excited about the oppurtunity to work with you."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We want to build the possible product for our creators and users. To do that we will need help from the community itself.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Experience Streaming">
              We specialise in crafting beautiful, high quality viewing experience.
              This means anyone watching your stream will feel like they are really their.
            </ListItem>
            <ListItem title="Streamer to Viewer">
              We want to bring the creator and the view as close together as possible. 
              This brings stronger connections and makes it easier for viewers to support their favorite creators.
            </ListItem>
            <ListItem title="Positive Impact">
              Foxor is dedicated to creating a platform full of positive experiences.
              It is our highest goal to keep or creators and viewers in a safe environment 
              that they trust.
            </ListItem>
            <ListItem title="Creativity">
              At Foxor we focus on our creative process, every member of our team has equal an voice.
              Our brain trust of engineers help make every creative idea a reality.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Foxor, for living in the moment.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a new live streaming company centered on making the connection between content
            creators and viewers as strong as possible. Our goal is to make it possible for you share 
            the most important moments, in the moment.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Darth Nedrah', logo: logoNorthAdventures }}
      >
        I am thrilled to share my experience with Foxor, the ultimate destination for content creators to showcase their streams! 
        As a passionate content creator myself, I have been searching for a platform that truly understands and supports our community, and Foxor has exceeded all my expectations.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
