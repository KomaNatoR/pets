import * as yup from 'yup';

export const regSchema = yup.object().shape({
    email: yup.string().required().nullable().email('Enter a valid Email').trim(),
    password: yup.string().required('Password is unsecure').nullable().min(8,'min value 8').max(16,'max value 16').trim(),
    confirm: yup.string().required('Password is unsecure').nullable().min(8,'min value 8').max(16,'max value 16').trim(),
});