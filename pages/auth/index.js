import { Fragment, useState } from 'react';
import { Container, Display, Photo, Section, Switch } from "../../styles/auth";
import { Button, Text, Input } from '../../UI';
import theme from '../../styles/theme';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isLogin, setIsLogin] = useState(false);

    const toggleMode = () => {
        setIsLogin(prevState => !prevState);
    }

    const login = async () => {

    }

    const signup = async () => {

    }

    const submit = async () => {
        if (isLogin) {
            await login();
        } else {
            await signup();
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
                <Input
                    value={password}
                    setValue={setPassword}
                    label={'Password'} 
                    placeholder={'vhqoeie#721lwwa'}
                    underlined
                    color={'#f0f0f0'}
                    labelColor={'#fff'}
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
                        />
                    </Fragment>
                }
                <div style={{ flex: 1 }} />
                <Button material block onPress={submit}>
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