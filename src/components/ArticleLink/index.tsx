import Image from 'next/image';
import Link from 'next/link';
import useWindowWidth from '../../hooks/useWindowWidth';

type ArticleProps = {
    mirroredArcticle?: boolean;
};

export function ArcticleLink({ mirroredArcticle }: ArticleProps) {
    const width = useWindowWidth();

    return (
        <article
            className={`flex flex-col gap-6 sm:gap-8 sm:max-h-[310px]  desktop:max-h-fit desktop:gap-12 ${
                mirroredArcticle ? 'sm:flex-row-reverse' : 'sm:flex-row'
            }`}
        >
            <Link href='/'>
                <div
                    className='-mx-6 maxHeightForProjectImageMobile relative sm:m-0 sm:w-1/2 sm:max-h-[310px] desktop:max-h-[570px]
                hover:cursor-pointer cardImage'
                >
                    <Image src='/Pic Group.png' alt='' layout='fill' aria-describedby='1' />

                    {width > 1200 && (
                        <div
                            className='invisible w-full h-full bg-projectBlack/90 px-12 top-0 relative
                                       flex flex-col items-center justify-center transition-opacity duration-300'
                        >
                            <p className='text-projectWhite font-bold absolute top-1/2 left-12 max-w-[90%] transition-transform -translate-x-6 duration-200'>
                                In this project, I was taking a short course where I was getting to know React. It is a
                                platform inspired in Netflix meant to be a repository of videos of my personal interest
                            </p>
                        </div>
                    )}
                </div>
            </Link>
            <h2 id='1' className='self-center sm:text-center sm:w-1/2 '>
                Personal Portfolio
            </h2>
        </article>
    );
}
