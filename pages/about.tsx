import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../src/components/Container';
import { PageHeading } from '../src/components/PageHeading';
import useWindowWidth from '../src/hooks/useWindowWidth';

export default function About() {
    const width = useWindowWidth();

    return (
        <>
            <Head>
                <title>About | Rodrigo Moreno</title>
                <meta
                    name='description'
                    content='A little more about me, why I got into working with tech, and what I work with.'
                />
            </Head>

            <Container>
                <PageHeading color='text-projectPurple'>About</PageHeading>
                <div className='flex flex-col desktop:flex-row gap-8  sm:gap-12'>
                    <figure>
                        <figcaption className='text-sm text-center mb-4 font-extralight'>
                            Smiling never hurted anyone, right?
                        </figcaption>
                        <div className='-mx-6 relative smilingPic sm:-mx-16 desktop:m-0 desktop:h-[400px] desktop:w-[400px] large:h-[536px] large:w-[536px]'>
                            <Image
                                priority
                                alt='A picture of me smiling'
                                src='/smiling photo.jpeg'
                                className='smilingPic'
                                layout='fill'
                                objectFit='cover'
                                objectPosition={
                                    (width < 768 && '40% 20%') ||
                                    (width >= 768 && width < 1200 && '70% 15%') ||
                                    (width >= 1200 && 'center 15%')
                                }
                            />
                        </div>
                    </figure>

                    <article>
                        <p>
                            Hello again! I'm <span className='font-bold text-projectPurple'>Rodrigo</span> and I am a
                            Developer and a UX/UI designer raised in Brazil. Currently in the 3rd year of my Computer
                            Science BSc studies. I know how to code and that’s cool, right?
                        </p>

                        <br />

                        <p>
                            Hmm, maybe not so much. I believe in having a purpose for coding. When I got into web
                            development I was learning how to code but that was it, I knew how to put divs in place.
                        </p>

                        <br />

                        <p>
                            But I wanted to understand <span className='font-bold'>more</span> and go beyond placing
                            divs. How could I express what I wanted in a more meaningful way? How could I make it easier
                            for someone to understand what was written? How could I make the visuals more appealing?
                        </p>

                        <br />

                        <p>
                            To answer all of that, I started to study{' '}
                            <span className='font-bold'>User Experience (UX)</span> and{' '}
                            <span className='font-bold'>User Interfaces (UI)</span>, as they play a big role when
                            dealing with these questions. And while working with this magic mix between{' '}
                            <span className='font-bold'>design</span>, <span className='font-bold'>technology</span>,
                            and <span className='font-bold'>people</span> I feel entertained, excited, and that we can
                            take every product or service to the next level. And that’s why I love what I do!
                        </p>

                        <br />

                        <p>
                            While I am fascinated with almost every aspect from web development and UX design, I try to
                            specialize in <span className='font-bold text-projectPurple'>UI design</span> and{' '}
                            <span className='font-bold text-projectPurple'>Front-End</span> development with{' '}
                            <span className='font-bold text-projectPurple'>React</span> and{' '}
                            <span className='font-bold text-projectPurple'>Typescript</span>.
                        </p>

                        <br />

                        <p>
                            When I’m not working you could find me the happiest while playing LoL, watching some live
                            streams, listening to some music (and air-drumming along), enjoying rainy days, reading
                            until late, or even thinking about what would I have for my next dessert.
                        </p>

                        <br />

                        <p>
                            Did you feel a connection or that we could team up to do something interesting? Reach out
                            and{' '}
                            <Link href='/contact'>
                                <a className='font-bold text-projectPurple hover:bg-projectPurple hover:text-projectWhite transition-colors duration-300'>
                                    contact me
                                </a>
                            </Link>
                            !
                        </p>
                    </article>
                </div>
            </Container>
        </>
    );
}
