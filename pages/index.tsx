import Image from 'next/image';
import { Container } from '../src/components/Container';
import { PageHeading } from '../src/components/PageHeading';

export default function Home() {
    return (
        <Container isHomePage>
            <div className='w-56 h-[200px] sm:w-[400px] sm:h-[355px] relative flex-none'>
                <Image src='/Pic Group.png' layout='fill' />
            </div>

            <div className='flex flex-col items-center justify-center gap-6  sm:gap-12'>
                <PageHeading centered>
                    Hey! 👋🏽
                    <br />
                    I'm Rodrigo.
                </PageHeading>
                <p className='text-center'>
                    I'm a{''}{' '}
                    <span className='font-bold'>
                        <span className='text-projectPurple'>{' <'}</span> Front-End Developer{' '}
                        <span className='text-projectPurple'>{'> '}</span>
                    </span>
                    and a{' '}
                    <span className='font-normal text-projectPurple font-CursiveFont text-[40px]'>UI Designer</span>,
                    originally from a small town in Brazil.
                </p>
            </div>
        </Container>
    );
}
