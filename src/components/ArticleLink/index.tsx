import Image from 'next/image';
import Link from 'next/link';

type ArticleProps = {
    imageIndex: number;
    imageName: string;
    mirroredArcticle?: boolean;
    pageLink: string;
    pageName: string;
    roles: string;
};

export function ArcticleLink({ imageIndex, imageName, mirroredArcticle, pageLink, pageName, roles }: ArticleProps) {
    return (
        <Link href={`/projects/${pageLink}`}>
            <a
                className={`-mx-6 sm:m-0 flex flex-col gap-8 sm:gap-12 desktop:gap-16 transition hover:shadow-xl hover:shadow-projectPurple/50 hover:cursor-pointer
                        rounded-md overflow-hidden ${mirroredArcticle ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
            >
                <div className='sm:max-w-[55%] leading-[0]'>
                    <Image
                        src={`/${imageName}`}
                        alt=''
                        layout='intrinsic'
                        quality={100}
                        width={1198}
                        height={635.75}
                        aria-describedby={`${imageIndex}`}
                    />
                </div>

                <div className='self-center sm:text-center grow'>
                    <h2 id={`${imageIndex}`} className='font-bold text-center'>
                        {`${pageName}`}
                    </h2>
                    <h3 className='inline text-center'>Role:</h3>{' '}
                    <span className='text-projectPurple'>{`${roles}`}</span>
                </div>
            </a>
        </Link>
    );
}
