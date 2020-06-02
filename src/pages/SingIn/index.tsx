import React, {useCallback, useRef} from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView,TextInput} from 'react-native';
import 'react-native-gesture-handler';
import {Container,Title, ForgotPassword, ForgotPasswordText,CreateAccuntButton,CreateAccuntButtonText} from './styles';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
    

const SingIn: React.FC = () => {
    const navigation = useNavigation();

    const formRef = useRef<FormHandles>(null);

    const passwordInputRef = useRef<TextInput>(null);

    const handleSignIn = useCallback((data:object) => {
        console.log(data);
    },[])

    return (
        <>
        <KeyboardAvoidingView 
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined} 
        enabled>
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flexGrow:1}}
            
        >
            <Container>
            <Image source={logoImg} />
            <Title>Faça seu logon</Title>

            <Form ref={formRef} onSubmit={handleSignIn}>
                <Input name="email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} icon="mail" placeholder="E-mail" returnKeyType="next" />
                <Input name="password" ref={passwordInputRef} secureTextEntry icon="lock" placeholder="Senha" returnKeyType="send" />

                <Button onPress={() => {formRef.current?.submitForm()}}>Entrar</Button>
            </Form>

            <ForgotPassword>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
            </Container>
        </ScrollView>
    </KeyboardAvoidingView>
    
    <CreateAccuntButton onPress={() => navigation.navigate('SingUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccuntButtonText>Criar conta</CreateAccuntButtonText>
    </CreateAccuntButton>
    
    </>
    )
}

export default SingIn;