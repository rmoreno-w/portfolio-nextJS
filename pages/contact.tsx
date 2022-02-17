import { useState } from 'react';
import Leaves from '../public/Leaves.svg';
import { Container } from '../src/components/Container';
import { PageHeading } from '../src/components/PageHeading';
import { Socials } from '../src/components/Socials';

export default function Contact() {
    const [formInfo, setFormInfo] = useState({
        name: '',
        mail: '',
        subject: '',
        text: '',
    });

    function sendEmail(e: any) {
        e.preventDefault();

        fetch('https://portfolio-mini-server.vercel.app/api/portfolio/sendemail', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formInfo }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('Email sent - API Response:', data);
            })
            .catch((err) => {
                console.log('Error sending email - API Response:', err);
            });
    }

    return (
        <Container>
            <PageHeading color='text-projectPurple'>Contact</PageHeading>
            <Leaves
                className='text-[70px] sm:text-[140px] desktop:text-[260px] absolute top-8 sm:top-14 desktop:top-20
                                right-2 sm:right-4 desktop:right-12 -z-10'
            />

            <Socials />

            <form className='flex flex-col self-start w-full desktop:w-3/4 gap-3'>
                <p className='self-start'>
                    Or if you prefer, send me a message with the form below and I will reach back as soon as possible!
                </p>

                <label className=''>Name: </label>
                <input
                    value={formInfo.name}
                    placeholder='Ex: John Doe'
                    onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
                    className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                />

                <label className=''>An email so I can contact you: </label>
                <input
                    value={formInfo.mail}
                    placeholder='Ex: yourname@yourcompany.com..'
                    type='email'
                    onChange={(e) => setFormInfo({ ...formInfo, mail: e.target.value })}
                    className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                />

                <label className=''>What is your message about: </label>
                <input
                    value={formInfo.subject}
                    placeholder='Ex: Contact about a project named..'
                    onChange={(e) => setFormInfo({ ...formInfo, subject: e.target.value })}
                    className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                />

                <label className=''>Message: </label>
                <textarea
                    value={formInfo.text}
                    placeholder='I wanted to say that...'
                    onChange={(e) => setFormInfo({ ...formInfo, text: e.target.value })}
                    className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                ></textarea>
                <button
                    className='bg-projectPurple text-projectWhite p-2 desktop:p-3 rounded-md transition duration-300 font-bold hover:brightness-90 mt-4 focus:ring focus:ring-projectPurple/70 focus:ring-offset-2 focus:ring-offset-projectWhite'
                    onClick={sendEmail}
                    type='submit'
                >
                    Send your message
                </button>
            </form>
        </Container>
    );
}
