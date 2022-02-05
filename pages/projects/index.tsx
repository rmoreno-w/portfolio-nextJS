import { Container } from '../../src/components/Container';
import { PageHeading } from '../../src/components/PageHeading';
import { ArcticleLink } from '../../src/components/ArticleLink';

export default function Home() {
    return (
        <Container>
            <PageHeading color='text-projectPurple'>Projects</PageHeading>

            <div className='flex w-full flex-col gap-8 sm:gap-12 desktop:gap-16'>
                <ArcticleLink page='oldPersonalWebsite' />
                <ArcticleLink page='' mirroredArcticle />
                <ArcticleLink page='' />
                <ArcticleLink page='' mirroredArcticle />
            </div>
        </Container>
    );
}
