import Image from 'next/image';
import { Container } from '../src/components/Container';
import { PageHeading } from '../src/components/PageHeading';
import { useEffect, useState } from 'react';

export default function About() {
    const width = window.screen.width;

    return (
        <Container>
            <PageHeading color='text-projectPurple'>About</PageHeading>
            <div className='flex flex-col desktop:flex-row gap-8  sm:gap-12'>
                <figure>
                    <figcaption className='text-sm text-center mb-4 font-extralight'>
                        Smiling never hurted anyone, right?
                    </figcaption>
                    <div className='-mx-6 relative smilingPic sm:-mx-16 desktop:m-0 desktop:h-[536px] desktop:w-[536px]'>
                        <Image
                            alt='Foto Sorrindo'
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
                        Developer and a UX/UI designer raised in Brazil. Currently at the 3rd year of my Computer
                        Science Bsc studies. I know how to code and that’s cool, right?
                    </p>

                    <br />

                    <p>
                        Hmm, maybe not so much. I believe that we should have a purpose for coding. When I got into web
                        development I was learning how to code but that was it, I knew how to put div’s in place.
                    </p>

                    <br />

                    <p>
                        But I wanted to understand <span className='font-bold'>more</span> and go beyond placing div’s.
                        How could I express what I wanted in a more meaningful way? How could I make it easier for
                        someone to understand what was written? How could I make the visuals more appealing?
                    </p>

                    <br />

                    <p>
                        To answer all of that, I started to study <span className='font-bold'>UX</span> and{' '}
                        <span className='font-bold'>UI</span>, as they play a big role when solving these questions. And
                        while working with this magic mix between <span className='font-bold'>design</span>,{' '}
                        <span className='font-bold'>technology</span> and <span className='font-bold'>people</span> I
                        feel that we can take every product or service to the next level. And that’s why I love what I
                        do!
                    </p>

                    <br />

                    <p>
                        While I am fascinated with almost evey aspect from web development and UX design, I try to
                        specialize in <span className='font-bold text-projectPurple'>UI design</span> and{' '}
                        <span className='font-bold text-projectPurple'>Front-End</span> development with{' '}
                        <span className='font-bold text-projectPurple'>React</span> and{' '}
                        <span className='font-bold text-projectPurple'>Typescript</span>.
                    </p>

                    <br />

                    <p>
                        When I’m not working you could find me the happiest while playing LoL, watching some live
                        streams, listening to some music (and air-drumming along), enjoying rainy days or even thinking
                        about what would I have for my next dessert.
                    </p>

                    <br />

                    <p>
                        Did this sound interesting to you? Reach out and{' '}
                        <span className='font-bold text-projectPurple'>contact me</span>!
                    </p>
                </article>
            </div>
        </Container>
    );
}
