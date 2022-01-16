import Link from 'next/link';
import { useState } from 'react';

export function HamburguerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function menuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
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
        </>
    );
}
