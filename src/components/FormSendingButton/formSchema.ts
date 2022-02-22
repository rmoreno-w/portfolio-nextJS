import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().min(2, 'Your name must be at least 2 characters long').required('Please inform your name'),
    mail: yup.string().email('Please inform a valid email').required('Please inform a valid email'),
    subject: yup.string().required('Please inform a subject for your message'),
    text: yup.string().required('Your message must not be empty'),
});

export default schema;
