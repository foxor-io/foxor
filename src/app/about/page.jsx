import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
// import imageAngelaFisher from '@/images/team/angela-fisher.jpeg'
// import imageBenjaminRussel from '@/images/team/benjamin-russel.jpeg'
// import imageBlakeReid from '@/images/team/blake-reid.jpeg'
// import imageChelseaHagon from '@/images/team/chelsea-hagon.jpeg'
// import imageDriesVincent from '@/images/team/dries-vincent.jpeg'
// import imageEmmaDorsey from '@/images/team/emma-dorsey.jpeg'
// import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpeg'
// import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpeg'
// import imageLeonardKrasner from '@/images/team/leonard-krasner.jpeg'
// import imageLeslieAlexander from '@/images/team/leslie-alexander.jpeg'
// import imageMichaelFoster from '@/images/team/michael-foster.jpeg'
// import imageWhitneyFrancis from '@/images/team/whitney-francis.jpeg'
import imageBen from '@/images/team/Ben.png'
import imageKyle from '@/images/team/kyle.png'
import imageBrandon from '@/images/team/brandon.png'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="py-24 mt-24 rounded-4xl bg-neutral-950 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion for tech with your passion for life"
        invert
      >
        <p>
          If you are waiting for life's great adventure to hit you in the face. It just did.
          Foxor is looking for developers and leaders to streamline our product and help us on our race to the future
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning. We have yet to lose a single employee.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We have our employees backs and we know they have ours.
          </GridListItem>
          <GridListItem title="Passion" invert>
            We are passion about our product and when you join our team you will be too. Trust me.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Benjamin Harden',
        role: 'Co-Founder',
        image: { src: imageBen },
      },
      {
        name: 'Kyle Rummens',
        role: 'Co-Founder',
        image: { src: imageKyle },
      },
      {
        name: 'Brandon ',
        role: 'Co-Founder',
        image: { src: imageBrandon },
      },
    ],
  },
  // {
  //   title: 'Team',
  //   people: [
  //     {
  //       name: 'Chelsea Hagon',
  //       role: 'Senior Developer',
  //       image: { src: imageChelseaHagon },
  //     },
  //     {
  //       name: 'Emma Dorsey',
  //       role: 'Senior Designer',
  //       image: { src: imageEmmaDorsey },
  //     },
  //     {
  //       name: 'Leonard Krasner',
  //       role: 'VP, User Experience',
  //       image: { src: imageLeonardKrasner },
  //     },
  //     {
  //       name: 'Blake Reid',
  //       role: 'Junior Copywriter',
  //       image: { src: imageBlakeReid },
  //     },
  //     {
  //       name: 'Kathryn Murphy',
  //       role: 'VP, Human Resources',
  //       image: { src: imageKathrynMurphy },
  //     },
  //     {
  //       name: 'Whitney Francis',
  //       role: 'Content Specialist',
  //       image: { src: imageWhitneyFrancis },
  //     },
  //     {
  //       name: 'Jeffrey Webb',
  //       role: 'Account Coordinator',
  //       image: { src: imageJeffreyWebb },
  //     },
  //     {
  //       name: 'Benjamin Russel',
  //       role: 'Senior Developer',
  //       image: { src: imageBenjaminRussel },
  //     },
  //     {
  //       name: 'Angela Fisher',
  //       role: 'Front-end Developer',
  //       image: { src: imageAngelaFisher },
  //     },
  //   ],
  // },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="text-2xl font-semibold font-display text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="relative overflow-hidden group rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="object-cover w-full transition duration-500 h-96 grayscale motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-semibold tracking-wide text-white font-display text-base/6">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Standing on the shoulders of Giants">
        <p>
          We believe that our strength lies in building on the foundation layed by those who came before us.
        </p>
        <div className="max-w-2xl mt-10 space-y-6 text-base">
          <p>
            Foxor was started by three friends who noticed that technology was
            taking a great leap forward. We wanted to take the world into the future by
            being the first virtual streaming platform on Apple's visionPro.
          </p>
          <p>
            At Foxor we are focused on building the most reliable and buttery smooth technology 
            you have ever seen. We want our users to find the new 3D space as beautiful as we do.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3" label="Underpaid Founders" />
          <StatListItem value="29" label="Email Subscribers" />
          <StatListItem value="$1.5M" label="Estimated Future Revenue" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the Blog"
        intro="Our team leadship is a strong beleive of the 'Build in Public' tech movement. We are publishing an article weekly on our progress and the new features coming to Foxor."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
