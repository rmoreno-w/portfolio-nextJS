import Logo from '../../../public/Logo.svg';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function menuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header
            className='sticky top-0 right-0 left-0 z-10 h-20 sm:h-[100px]
        flex justify-between items-center px-8 sm:px-20 desktop:px-32
        bg-projectWhite border border-projectBlack-[10] rounded-10 purple-Shadow'
        >
            <button>
                <Link href='/'>
                    <a>
                        <Logo className='text-5xl sm:text-6xl' />
                    </a>
                </Link>
            </button>

            <button onClick={menuClick} className='h-12 w-12 z-[12] p-2'>
                <span className='flex flex-col'>
                    <span
                        className={`h-1 w-full transition duration-[550ms] rounded-[3px] bg-projectGreen inline-block ${
                            isMenuOpen ? 'translate-y-3 rotate-[135deg]' : ''
                        }`}
                    />
                    <span
                        className={`h-1 w-full transition duration-[550ms] rounded-[3px] bg-projectGreen inline-block mt-1.5 ${
                            isMenuOpen ? 'scale-0 translate-x-4' : ''
                        }`}
                    />
                    <span
                        className={`h-1 w-full transition duration-[550ms] rounded-[3px] bg-projectGreen inline-block mt-1.5 ${
                            isMenuOpen ? '-translate-y-2 rotate-[-135deg]' : ''
                        }`}
                    />
                </span>
            </button>
            <div
                className={`fixed z-[11] bg-projectPurple backdrop-brightness-75 flex flex-col gap-4
                top-0 h-screen left-full w-full py-20 px-8
                transition-transform duration-[450ms] ${isMenuOpen ? '-translate-x-full' : ''}`}
            >
                <Link href='/'>
                    <a className='text-projectWhite font-bold' onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
                        Home
                    </a>
                </Link>
                <Link href='/about'>
                    <a className='text-projectWhite font-bold' onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
                        About
                    </a>
                </Link>
                <Link href='/contact'>
                    <a className='text-projectWhite font-bold' onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
                        Contact
                    </a>
                </Link>
                <Link href='/projects'>
                    <a className='text-projectWhite font-bold' onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
                        Projects
                    </a>
                </Link>
            </div>
        </header>
    );
}
