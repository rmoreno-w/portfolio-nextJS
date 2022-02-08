import Image from 'next/image';
import { Container } from '../../src/components/Container';
import { PageHeading } from '../../src/components/PageHeading';
import Figma from '../../public/figma.svg';
import GitHub from '../../public/gitHub.svg';
import LiveSiteLink from '../../public/external_link.svg';

export default function BEATS() {
    return (
        <>
            <Container>
                <PageHeading color='text-projectPurple'>BEATS</PageHeading>
                <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                    <Image
                        alt='BEATS Banner'
                        src='/beats_banner.png'
                        layout='intrinsic'
                        quality={100}
                        width={1198}
                        height={635.75}
                    />
                </div>

                <h2 className='self-start font-bold'>
                    Duration: <span className='font-normal'>2 Months</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Role(s): <span className='font-normal'>Developer and UI Designer</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Main Goal: <span className='font-normal'>Style Guide and Production Version</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Contributions:{' '}
                    <span className='font-normal'>
                        Design and build the MVP of a repository for Architectural Strategies in Security.
                    </span>
                </h2>

                <div className='self-start flex flex-col gap-6 sm:gap-12 '>
                    <h2 className='font-bold'>
                        Development Process:{' '}
                        <span className='font-normal'>
                            A colleague from university was working on his final project and asked for my help to
                            develop the UI for his system. He wanted to have the system working initially for Desktops
                            and had some low-fidelity wireframes.
                        </span>
                    </h2>

                    <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                        <Image
                            alt='BEATS Banner'
                            src='/beats_low_fidelity.png'
                            layout='intrinsic'
                            quality={100}
                            width={1198}
                            height={635.75}
                        />
                    </div>

                    <p className='font-normal block'>
                        On a first phase I tried to develop a branding for the system. As it is related to security and
                        it also needs to transmit formality, I chose black to transmit these qualities; for accents and
                        contrast, I took advantage of the green that is present on the department logo he sent me, as
                        green can transmit quality. Elaborated some variation of shades on these colors, found white
                        shades for text, red and yellow shades suitable for buttons, checked text colors against
                        backgrounds for contrast accessibility and voilá, all set on choosing colors.
                    </p>

                    <p className='font-normal block'>
                        As for the fonts, I chose Source Sans Pro for body copy, which is an all-round font designed to
                        work well in user interfaces. Sans-Serif fonts usually do well when analyzing legibility in
                        screens, and Sans Pro does just that. For headings and subheadings, I chose Montserrat, which is
                        a Sans-Serif font that evoques the beauty of the urban typography of the middle 20th century.
                        This font pairs well with Sans Pro, maintains the great legibility aspect and gives the project
                        just a small art/humanity touch.
                    </p>

                    <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                        <Image
                            alt='BEATS Banner'
                            src='/beats_style_guide.png'
                            layout='intrinsic'
                            quality={100}
                            width={1198}
                            height={635.75}
                        />
                    </div>

                    <p className='font-normal block'>
                        Another note on the project branding, we were lacking a logo to really set the project identity,
                        so I came up with an idea compund by the name of the project written with the Orbitron font to
                        evoque futuristic/sci-fi feelings and a padlock in the contrast color to evoque security.
                    </p>

                    <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                        <Image
                            alt='BEATS Banner'
                            src='/beats.png'
                            layout='intrinsic'
                            quality={100}
                            width={1198}
                            height={635.75}
                        />
                    </div>

                    <p className='font-normal block'>
                        Next, I worked on the low-fidelity prototypes to evolve them into the high-fidelity prototypes.
                        You can see some samples of these below or check the link to the Figma file on the bottom of the
                        page. To finish up, after they got approved by the stakeholders, the final step was to implement
                        and deploy the project. For this task I used Next.JS, React, Typescript, Tailwind and
                        Framer-motion.
                    </p>

                    <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                        <Image
                            alt='BEATS Banner'
                            src='/beats_high_fidelity.png'
                            layout='intrinsic'
                            quality={100}
                            width={1198}
                            height={635.75}
                        />
                    </div>
                </div>

                <div className='self-start flex flex-col gap-6 sm:gap-12 '>
                    <h2 className='font-bold'>
                        Conclusions:{' '}
                        <span className='font-normal'>
                            Prior to this project, I had only made some tweaks to other project’s UIs and had never
                            developed something from the scratch. This time I had the opportunity to get my first
                            professional experience on UI Design and really develop something from 0 on my own, from
                            design to implementation.
                        </span>
                    </h2>
                    <p className='font-normal block'>
                        To wrap up, on a personal note, I can only say that I get pretty entertained when I’m working
                        with either designing an UI or developing Front-end and time flies. I had a lot of fun and
                        enjoyed the whole proccess, and hope the next opportunities would be as fun as this one was!
                    </p>
                </div>

                <div className='flex justify-between gap-12'>
                    <a
                        href='http://beats-tau.vercel.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='display flex flex-col gap-4 items-center group'
                    >
                        <LiveSiteLink className='text-5xl' />{' '}
                        <span className='block  max-w-5xl group-hover:bg-projectPurple group-hover:text-projectWhite rounded transition-colors duration-300 px-2 text-center'>
                            Visit the Website
                        </span>
                    </a>

                    <a
                        href='https://www.figma.com/file/D7ghMyI92GfQpg8kuFhipE/BEATS?node-id=0%3A1'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='display flex flex-col gap-4 items-center group'
                    >
                        <Figma className='text-5xl' />{' '}
                        <span className='block  max-w-5xl group-hover:bg-projectPurple group-hover:text-projectWhite rounded transition-colors duration-300 px-2 text-center'>
                            Visit Figma File
                        </span>
                    </a>

                    <a
                        href='https://github.com/rmoreno-w/beats-next'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='display flex flex-col gap-4 items-center group'
                    >
                        <GitHub className='text-5xl' />{' '}
                        <span className='block  max-w-5xl group-hover:bg-projectPurple group-hover:text-projectWhite rounded transition-colors duration-300 px-2 text-center'>
                            View Source Code on GitHub
                        </span>
                    </a>
                </div>
            </Container>
        </>
    );
}
