import Image from 'next/image';
import Link from 'next/link';

type ArticleProps = {
    mirroredArcticle?: boolean;
    page: string;
};

export function ArcticleLink({ mirroredArcticle, page }: ArticleProps) {
    return (
        <article
            className={`flex flex-col gap-6 sm:gap-12 sm:justify-between group transition hover:shadow-xl hover:shadow-projectPurple/50 hover:cursor-pointer
                        rounded-md ${mirroredArcticle ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
        >
            <Link href={`/projects/${page}`}>
                <div
                    className='-mx-6 maxHeightForProjectImageMobile relative sm:m-0 sm:aspect-[4/3] sm:w-[55%] sm:max-w-[500px] sm:h-auto
                    sm:justify-between'
                >
                    <Image src='/Pic Group.png' alt='' layout='fill' aria-describedby='1' />
                </div>
            </Link>
            <div className='self-center sm:text-center grow'>
                <h2 id='1' className='font-bold'>
                    Personal Portfolio
                </h2>
                <h3 className='inline'>Role:</h3> <span className='text-projectPurple'>Developer</span>
            </div>
        </article>
    );
}
