import Logo from '../../../public/Logo.svg';
import Link from 'next/link';

export function Header() {
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

            <button className='header__MenuButton '>
                <a href='#'>BOTAO MENU</a>
            </button>
        </header>
    );
}
