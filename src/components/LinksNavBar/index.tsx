import Link from 'next/link';
import { useRouter } from 'next/router';

export function LinksNavBar() {
    const router = useRouter();
    const activeRoute = router.pathname;

    return (
        <nav className='flex'>
            <Link href='/'>
                <a
                    className={`relative text-projectBlack font-extralight text-sm mx-4
                    hover:underline decoration-2 underline-offset-4 decoration-projectPurple
                    ${router.pathname == '/' ? 'border-b-2 border-b-projectGreen hover:no-underline' : ''}`}
                >
                    Home
                </a>
            </Link>

            <span className='h-4 w-[2px] bg-projectPurple self-center'></span>

            <Link href='/about'>
                <a
                    className={`relative text-projectBlack font-extralight text-sm mx-4
                    hover:underline decoration-2 underline-offset-4 decoration-projectPurple
                    ${router.pathname == '/about' ? 'border-b-2 border-b-projectGreen hover:no-underline' : ''}`}
                >
                    About
                </a>
            </Link>

            <span className='h-4 w-[2px] bg-projectPurple self-center'></span>

            <Link href='/contact'>
                <a
                    className={`relative text-projectBlack font-extralight text-sm mx-4
                    hover:underline decoration-2 underline-offset-4 decoration-projectPurple
                    ${router.pathname == '/contact' ? 'border-b-2 border-b-projectGreen hover:no-underline' : ''}`}
                >
                    Contact
                </a>
            </Link>

            <span className='h-4 w-[2px] bg-projectPurple self-center'></span>

            <Link href='/projects'>
                <a
                    className={`relative text-projectBlack font-extralight text-sm mx-4
                    hover:underline decoration-2 underline-offset-4 decoration-projectPurple
                    ${router.pathname == '/projects' ? 'border-b-2 border-b-projectGreen hover:no-underline' : ''}`}
                >
                    Projects
                </a>
            </Link>
        </nav>
    );
}
