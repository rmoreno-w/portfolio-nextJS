import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../../../public/Logo.svg';
import { HamburguerMenu } from '../HamburguerMenu';
import { LinksNavBar } from '../LinksNavBar';
import useWindowWidth from '../../hooks/useWindowWidth';

export function Header() {
    const width = useWindowWidth();

    return (
        <header
            className='sticky top-0 right-0 left-0 z-10 h-20 sm:h-[100px]
            flex justify-between items-center px-8 sm:px-12 desktop:px-28 
            bg-projectWhite border border-projectBlack-[10] rounded-10 purple-Shadow'
        >
            <button>
                <Link href='/'>
                    <a>
                        <Logo className='text-5xl sm:text-6xl' />
                    </a>
                </Link>
            </button>

            {width > 768 ? <LinksNavBar /> : <HamburguerMenu />}
        </header>
    );
}
