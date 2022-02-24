import Head from 'next/head';

import Image from 'next/image';
import { Container } from '../../src/components/Container';
import { PageHeading } from '../../src/components/PageHeading';
import GitHub from '../../public/gitHub.svg';
import LiveSiteLink from '../../public/external_link.svg';

export default function rodrigoFlix() {
    return (
        <>
            <Head>
                <title>RodrigoFlix | Rodrigo Moreno</title>
                <meta
                    name='description'
                    content='More about a project I worked with during a 1 week course using React, Styled Components, Typescript, MongoDB Atlas, and Node.js (Express).'
                />
            </Head>

            <Container>
                <PageHeading color='text-projectPurple'>RodrigoFlix</PageHeading>
                <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                    <Image
                        alt='Rodrigo Flix Banner'
                        src='/rodrigo_flix.png'
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
                    Role(s): <span className='font-normal'>Developer</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Main Goal:{' '}
                    <span className='font-normal'>
                        Develop a platform inspired in Netflix that is a repository of videos of my personal interest
                    </span>
                </h2>

                <h2 className='self-start font-bold'>
                    Description:{' '}
                    <span className='font-normal'>
                        Working in this project I’ve got my first contact with the React Lib. I learned the basics from
                        React, CSS-in-JS (Styled Components) and project hosting during this 1 week course. The original
                        project was written in JavaScript, but I rewrote it with 100% Typescript. Also, the original
                        project used a fake database built on a JSON file. I rewrote its logic and deployed it on an
                        Express server that now accesses the data through a MongoDB database that is hosted on their
                        cloud platform (Atlas).
                    </span>
                </h2>

                <h2 className='self-start font-bold'>
                    - Key concepts learned/worked:{' '}
                    <span className='font-normal'>
                        React, React Router, Styled Components, Hosting, Typescript, MongoDB Atlas, NodeJS, Express.
                    </span>
                </h2>

                <div className='grid grid-cols-2 gap-6 sm:gap-12'>
                    <a
                        href='https://rodrigoflix-rmoreno-w.vercel.app/'
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
                        href='https://github.com/rmoreno-w/rodrigoflix'
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
