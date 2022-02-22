import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Leaves from '../public/Leaves.svg';
import { Container } from '../src/components/Container';
import { PageHeading } from '../src/components/PageHeading';
import { Socials } from '../src/components/Socials';
import { FormSendingButton } from '../src/components/FormSendingButton';
import schema from '../src/components/FormSendingButton/formSchema';

type formInputData = {
    name: string;
    mail: string;
    subject: string;
    text: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset: resetFormFields,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [sendingStatus, setSendingStatus] = useState('stale');

    function resetStatus(e: any) {
        e.preventDefault();
        setSendingStatus('stale');
    }

    function resetForm(e: any) {
        e.preventDefault();
        resetFormFields();
        setSendingStatus('stale');
    }

    // function setFieldInfo(e: any) {
    //     const fieldName = e.target.name;
    //     const fieldValue = e.target.value;

    //     // Callback on usestate => useEffect
    //     setFormInfo({ ...formInfo, [fieldName]: fieldValue });
    // }

    function sendEmail(data: formInputData, e: any) {
        // console.log(formInfo);
        setSendingStatus('loading');

        const api = axios.create({
            // baseURL: 'http://localhost:8080/api',
            baseURL: 'https://portfolio-mini-server.vercel.app/api',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        api.post('/portfolio/sendemail', {
            data: data,
        })
            .then((data) => {
                setSendingStatus('sent');
                // console.log('Email sent - API Response:', data);
            })
            .catch((err) => {
                setSendingStatus('error');
                console.log('Error sending email - API Response:', err.response.data);
            });
    }

    return (
        <>
            <Head>
                <title>Contact | Rodrigo Moreno</title>
            </Head>

            <Container>
                <PageHeading color='text-projectPurple'>Contact</PageHeading>
                <Leaves
                    className='text-[70px] sm:text-[140px] desktop:text-[260px] absolute top-8 sm:top-14 desktop:top-20
                right-2 sm:right-4 desktop:right-12 -z-10'
                />

                <Socials />

                <form className='flex flex-col self-start w-full desktop:w-3/4 gap-4'>
                    <p className='self-start'>
                        Or if you prefer, send me a message with the form below and I will reach back as soon as
                        possible!
                    </p>

                    <div className='flex flex-col gap-2'>
                        <label className=''>Name: </label>
                        <input
                            type='text'
                            placeholder='Ex: John Doe'
                            className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                            {...register('name')}
                        />
                        {errors.name ? <span className='text-projectRed'>{errors.name?.message}</span> : null}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className=''>Your best e-mail so I can contact you: </label>
                        <input
                            type='email'
                            placeholder='Ex: yourname@yourcompany.com..'
                            className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                            {...register('mail')}
                        />
                        {errors.mail ? <span className='text-projectRed'>{errors.mail?.message}</span> : null}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className=''>What is your message about: </label>
                        <input
                            type='text'
                            placeholder='Ex: Contact about a project named..'
                            className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                            {...register('subject')}
                        />
                        {errors.subject ? <span className='text-projectRed'>{errors.subject?.message}</span> : null}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className=''>Message: </label>
                        <textarea
                            placeholder='I wanted to say that...'
                            className='bg-transparent border-2 border-projectPurple focus:bg-transparent transition-all duration-300 focus:outline-none focus:ring focus:ring-projectGreen focus:ring-offset-2 focus:ring-offset-projectWhite focus:border-projectGreen rounded p-2'
                            {...register('text')}
                        ></textarea>
                        {errors.text ? <span className='text-projectRed'>{errors.text?.message}</span> : null}
                    </div>
                    <FormSendingButton
                        sendingStatus={sendingStatus}
                        sendEmail={handleSubmit(sendEmail)}
                        resetStatus={resetStatus}
                        resetForm={resetForm}
                    />
                </form>
            </Container>
        </>
    );
}
