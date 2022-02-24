import Head from 'next/head';
import { Container } from '../src/components/Container';
import { PageHeading } from '../src/components/PageHeading';
import Error404 from '../public/404.svg';

export default function Home() {
    return (
        <>
            <Head>
                <title>Page not found | Rodrigo Moreno</title>
            </Head>

            <Container>
                <div className='flex flex-col largest:flex-row items-center justify-center gap-6 sm:gap-12'>
                    <h1 className='text-lg text-center largest:text-2xl font-bold underline decoration-projectPurple decoration-2 largest:decoration-4 underline-offset-8 desktop:self-start'>
                        Sorry! We couldn’t find the page you’re looking for :(
                    </h1>
                    <div className='flex flex-col'>
                        <Error404 className='text-[300px] sm:text-[500px] mb-4' />
                        <p className='text-[12px] text-center'>
                            Illustration by{' '}
                            <a
                                className='text-[12px] underline hover:cursor-pointer hover:text-projectPurple decoration-projectPurple decoration-2 underline-offset-2'
                                href='https://storyset.com/web'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                StorySet
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
}
