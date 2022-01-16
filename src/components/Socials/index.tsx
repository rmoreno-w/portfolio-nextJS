import Mail from '../../../public/mail.svg';
import GitHub from '../../../public/gitHub.svg';
import Linkedin from '../../../public/linkedin.svg';
import Instagram from '../../../public/instagram.svg';
import useWindowWidth from '../../hooks/useWindowWidth';

export function Socials() {
    const width = useWindowWidth();

    function copyMail(e: any) {
        navigator.clipboard.writeText('rmoreno.w@gmail.com');
    }

    return (
        <address className='self-start flex flex-col gap-3 desktop:gap-4 not-italic'>
            <p>You can find me on social media or even reach me by Email</p>
            <div className='flex gap-4 items-center '>
                <Mail className='text-xl' />{' '}
                <span
                    onClick={copyMail}
                    className='hover:bg-projectPurple hover:text-projectWhite rounded transition-colors duration-300 relative has-tooltip px-2'
                >
                    {' '}
                    rmoreno.w@gmail.com
                    <span
                        className={`tooltip transition duration-150 invisible absolute top-0 z-10 px-2 py-1 -mt-1 text-sm leading-tight text-white transform -translate-x-full -translate-y-full bg-projectBlack rounded shadow-md before:absolute before:top-full before:left-1/2 before:border-8 before:border-transparent before:border-t-projectBlack ${
                            width > 1200 ? ' w-28' : 'w-16'
                        }`}
                    >
                        {' '}
                        {width > 1200 ? 'Click to copy!' : 'Copied'}
                    </span>
                </span>
            </div>

            <a
                href='https://github.com/rmoreno-w'
                target='_blank'
                rel='noopener noreferrer'
                className='display flex gap-4 items-center'
            >
                <GitHub className='text-xl' />{' '}
                <span className='hover:bg-projectPurple hover:text-projectWhite rounded transition-colors duration-300 px-2'>
                    rmoreno-w
                </span>
            </a>

            <a
                href='https://www.linkedin.com/in/rmoreno-w/'
                target='_blank'
                rel='noopener noreferrer'
                className='display flex gap-4 items-center'
            >
                <Linkedin className='text-xl' />{' '}
                <span className='hover:bg-projectPurple hover:text-projectWhite rounded transition-colors duration-300 px-2'>
                    rmoreno-w
                </span>
            </a>

            <a
                href='https://www.instagram.com/rmoreno.w/'
                target='_blank'
                rel='noopener noreferrer'
                className='display flex gap-4 items-center'
            >
                <Instagram className='text-xl' />{' '}
                <span className='hover:bg-projectPurple hover:text-projectWhite rounded transition-colors duration-300 px-2'>
                    rmoreno.w
                </span>
            </a>
        </address>
    );
}
