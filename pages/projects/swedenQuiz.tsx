import Image from 'next/image';
import { Container } from '../../src/components/Container';
import { PageHeading } from '../../src/components/PageHeading';
import GitHub from '../../public/gitHub.svg';
import LiveSiteLink from '../../public/external_link.svg';

export default function swedenQuiz() {
    return (
        <>
            <Container>
                <PageHeading color='text-projectPurple'>Sweden Quiz</PageHeading>
                <div className='-mx-6 sm:-mx-16 desktop:mx-0'>
                    <Image
                        alt='Rodrigo Flix Banner'
                        src='/sweden_quiz.png'
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
                    Main Goal: <span className='font-normal'>Develop a Quiz-App about a theme of my interest</span>
                </h2>

                <h2 className='self-start font-bold'>
                    Description:{' '}
                    <span className='font-normal'>
                        This was also a project developed during a 1 week course, where I developed a quiz with
                        questions about general facts from a country I find very interesting: Sweden 🇸🇪. I had the
                        opportunity to expand my knowledge in React and got in contact with Next.JS and Framer-Motion
                        for the first time while building the project.
                    </span>
                </h2>

                <h2 className='self-start font-bold'>
                    - Key concepts learned/worked:{' '}
                    <span className='font-normal'>
                        SSG (Static Site Generation), SSR (Server-Side Rendering), ISR (Incremental Site Regeneration),
                        Next.JS, Framer-Motion, Hosting.
                    </span>
                </h2>

                <div className='flex justify-between gap-12'>
                    <a
                        href='https://sweden-quiz-git-main-rmoreno-w.vercel.app/'
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
                        href='https://github.com/rmoreno-w/sweden-quiz'
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
