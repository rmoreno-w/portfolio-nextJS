import Head from 'next/head';

import Image from 'next/image';
import { Container } from '../../src/components/Container';
import { PageHeading } from '../../src/components/PageHeading';
import GitHub from '../../public/gitHub.svg';
import LiveSiteLink from '../../public/external_link.svg';

export default function oldPersonalWebsite() {
    return (
        <>
            <Head>
                <title>Old Personal Website | Rodrigo Moreno</title>
            </Head>

            <Container>
                <PageHeading color='text-projectPurple'>Old Personal Website</PageHeading>
                <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                    <Image
                        alt='Old Personal Website Banner'
                        src='/old_website_banner.png'
                        layout='intrinsic'
                        quality={100}
                        width={1198}
                        height={635.75}
                    />
                </div>

                <h2 className='self-start font-bold'>
                    Duration: <span className='font-normal'>1 Week</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Role(s): <span className='font-normal'>Developer and UI Designer</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Main Goal: <span className='font-normal'>Develop my first personal website</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Description:{' '}
                    <span className='font-normal'>
                        This was the first project envolving web technologies that I ever worked with. It was created
                        during a course I was taking to get started into web development. I had no clue about design and
                        just followed my heart. But every journey begins with a first step, right?
                    </span>
                </h2>

                <h2 className='self-start font-bold'>
                    - Key concepts learned/worked:{' '}
                    <span className='font-normal'>
                        HTML 5, CSS 3, Responsiveness, GitHub basics, Visual Studio Code.
                    </span>
                </h2>

                <div className='grid grid-cols-2 gap-6 sm:gap-12'>
                    <a
                        href='https://rmoreno-w.github.io/portfolio/'
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
                        href='https://github.com/rmoreno-w/portfolio'
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
