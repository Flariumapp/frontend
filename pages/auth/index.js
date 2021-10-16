import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Container, Display, InputContainer, InputSubContainer, Section, Switch } from "../../styles/auth";
import { Button, Text, Input } from '../../UI';
import theme from '../../styles/theme';
import { useSelector, useDispatch } from 'react-redux';
import { errConfig } from '../../utility/error-config';
import { login, signup } from '../../store/actions';
import { message } from 'antd';
import { getSession, signIn } from 'next-auth/client';

const AuthPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     getSession().then(session => {
    //         if (session) {
    //             setIsLoading(false);
    //             router.push('/');
    //         } else {
    //             setIsLoading(false);
    //         }
    //     });
    // }, []);

    const toggleMode = () => {
        setIsLogin(prevState => !prevState);
    }

    const loginHandler = async () => {
        try {
            const result = await signIn('credentials', { redirect: false, email, password });
            if (result.error) {
                throw new Error(result.error);
            }
            // await dispatch(login({ email, password }));
            // await axios.post('/api/auth/login', { email, password });
            setIsLoading(false);
            router.push('/');
        } catch (err) {
            setIsLoading(false);
            const errMsg = errConfig(err, 'Login Failed!');
            message.error({
                content: errMsg
            });
        }
    }

    const signupHandler = async () => {
        try {
            await dispatch(signup({ email, firstName, lastName, password }));
            setIsLoading(false);
            setIsLogin(true);
        } catch (err) {
            setIsLoading(false);
            const errMsg = errConfig(err, 'Signup Failed!');
            message.error({
                content: errMsg
            });
        }
    }

    const submitHandler = async () => {
        setIsLoading(true);
        if (isLogin) {
            await loginHandler();
        } else {
            await signupHandler();
        }
    }

    return (
        <Container>
            <Display />
            <Section>
                <Text type="heading" color="#fff">
                    {isLogin ? 'Log In' : 'Sign Up'}
                </Text>
                <div style={{ height: 20 }} />
                <Input
                    value={email}
                    setValue={setEmail}
                    label={'Email'} 
                    placeholder={'test@test.com'}
                    underlined
                    color={'#f0f0f0'}
                    labelColor={'#fff'}
                />
                <div style={{ height: 20 }} />
                {
                    !isLogin &&
                    <Fragment>
                        <InputContainer>
                            <InputSubContainer>
                                <Input
                                    value={firstName}
                                    setValue={setFirstName}
                                    label={'First Name'} 
                                    placeholder={'Alex'}
                                    underlined
                                    color={'#f0f0f0'}
                                    labelColor={'#fff'}
                                />
                            </InputSubContainer>
                            <div style={{ width: 20 }} />
                            <InputSubContainer>
                                <Input
                                    value={lastName}
                                    setValue={setLastName}
                                    label={'Last Name'} 
                                    placeholder={'Murphy'}
                                    underlined
                                    color={'#f0f0f0'}
                                    labelColor={'#fff'}
                                />
                            </InputSubContainer>
                        </InputContainer>
                        <div style={{ height: 20 }} />
                    </Fragment>
                }
                <Input
                    value={password}
                    setValue={setPassword}
                    label={'Password'} 
                    placeholder={'vhqoeie#721lwwa'}
                    underlined
                    color={'#f0f0f0'}
                    labelColor={'#fff'}
                    type={'password'}
                />
                {
                    !isLogin &&
                    <Fragment>
                        <div style={{ height: 20 }} />
                        <Input
                            value={passwordConfirm}
                            setValue={setPasswordConfirm}
                            label={'Confirm Password'} 
                            placeholder={'vhqoeie#721lwwa'}
                            underlined
                            color={'#f0f0f0'}
                            labelColor={'#fff'}
                            type={'password'}
                        />
                    </Fragment>
                }
                <div style={{ flex: 1 }} />
                <Button material block loading={isLoading} onPress={submitHandler}>
                    {isLogin ? 'Login' : 'Signup'}
                </Button>
                <Switch>
                    <Text size={14} color={"#fff"}>
                        {isLogin ? 'Don\'t have an account?' : 'Already have an account ?'}
                    </Text>
                    <div style={{ width: 10 }} />
                    <Text size={14} color={theme.primary} pointer onPress={toggleMode}>
                        {isLogin ? 'Signup' : 'Login'}
                    </Text>
                </Switch>
            </Section>
        </Container>
    );
}

export default AuthPage;