import * as Yup from 'yup';

export const regSchema = Yup.object().shape({
    email: Yup.string().required().nullable().email('Enter a valid Email').trim(),
    password: Yup.string().required('Password is unsecure').nullable().min(8,'min value 8').max(16,'max value 16').trim(),
    confirm: Yup.string().required('Password is unsecure').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
export const logSchema = Yup.object().shape({
    email: Yup.string().required().nullable().email('Enter a valid Email').trim(),
    password: Yup.string().required('Password is unsecure').nullable().min(8,'min value 8').max(16,'max value 16').trim(),
});