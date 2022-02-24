import Head from 'next/head';

import { Container } from '../../src/components/Container';
import { PageHeading } from '../../src/components/PageHeading';
import { ArcticleLink } from '../../src/components/ArticleLink';

export default function Home() {
    return (
        <>
            <Head>
                <title>Projects | Rodrigo Moreno</title>
                <meta
                    name='description'
                    content='You can check some of my projects and learn more about my working process.'
                />
            </Head>

            <Container>
                <PageHeading color='text-projectPurple'>Projects</PageHeading>

                <div className='flex w-full flex-col gap-8 sm:gap-12 desktop:gap-16'>
                    <ArcticleLink
                        imageIndex={4}
                        imageName='beats.png'
                        pageLink='beats'
                        pageName='Beats'
                        roles='Developer and UI Designer'
                    />
                    <ArcticleLink
                        imageIndex={3}
                        imageName='sweden_quiz.png'
                        pageLink='swedenQuiz'
                        pageName='Sweden Quiz'
                        roles='Developer and UI Designer'
                        mirroredArcticle
                    />
                    <ArcticleLink
                        imageIndex={2}
                        imageName='rodrigo_flix.png'
                        pageLink='rodrigoFlix'
                        pageName='RodrigoFlix'
                        roles='Developer'
                    />
                    <ArcticleLink
                        imageIndex={1}
                        imageName='old_website_banner.png'
                        pageLink='oldPersonalWebsite'
                        pageName='Old Personal Website'
                        roles='Developer and UI Designer'
                        mirroredArcticle
                    />
                </div>
            </Container>
        </>
    );
}
