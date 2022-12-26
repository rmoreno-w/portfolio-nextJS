import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../src/components/Container';
import { PageHeading } from '../src/components/PageHeading';

export default function Home() {
    const easterEggMessage = `
      / \\               / \\         
     /   \\             /   \\        
    (_____)           (_____)       
     |   |  _   _   _  |   |        
     | O |_| |_| |_| |_| O |        
     |-  |          _  | - |        
     |   |   - _^_     |   |        
     |  _|    //|\\\\  - |   |        
     |   |   ///|\\\\\\   |  -|        
     |-  |_  |||||||   |   |        
     |   |   |||||||   |-  |        
     |___|___|||||||___|___|        
            (      (                
             \\      \\               
              )      )              
              |      |              
             (      (               
              \\      \\              
    %cYou've just finished the secret quest
    and found the secret castle, unlocking 
    the easter egg. Nah, just kidding, if you 
    want to check the source code of my website, 
    https://github.com/rmoreno-w/portfolio-nextjs
    `;

    console.log(easterEggMessage, 'line-height:1.5;');

    return (
        <>
            <Head>
                <title>Rodrigo Moreno | Front-End Developer and UI Designer</title>
                <meta
                    name='description'
                    content='UI designer and Front-end developer, currently working with Next.js and React. Check my latest projects or contact me!'
                />
            </Head>

            <Container isHomePage>
                <div className='w-56 h-[200px] sm:w-[400px] sm:h-[355px] relative flex-none'>
                    <Image src='/Pic Group.png' layout='fill' priority />
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
                        <span className='font-normal text-projectPurple font-CursiveFont text-[40px]'>UI Designer</span>
                        , originally from a small town in Brazil.
                    </p>
                </div>
            </Container>
        </>
    );
}
