import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography, Container, Paper, Alert } from '@mui/material';


const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (values) => {
        if (values.username === 'user' && values.password === 'password'){
            localStorage.setItem('token', 'fake-jwt-token');
            localStorage.setItem('username', values.username);
            setError('');
            navigate('/tasks');
        }else{
            setError('Invalid username or password');
        }
    };
    return (
        <Container component="main" maxWidth="xs" sx={{  borderRadius: 2 }}>
            <Paper elevation = {3} sx = {{ p : 4, mt : 8}}>
                <Typography component = "h1" variant="h5" align = "center">
                    Task Manager Login
                </Typography>
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
                <Formik
                    initialValues={{ username: '', password: ''}}
                    validationSchema={LoginSchema}
                    //onSubmit = {handleLogin}
                >
                    {({errors, touched, isSubmitting}) => (
                        <Form>
                            <Box sx = {{ mt : 2}}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    id = "username"
                                    name = "username"
                                    label = "Username"
                                    margin = "normal"
                                    error={touched.username && Boolean(errors.username)}
                                    helperText={touched.username && errors.username}
                                />
                                <Field
                                    as={TextField}
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2 }}
                                    disabled={isSubmitting}
                                    >
                                    Sign In
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>
    );
};

export default Login;