import React,{useRef} from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
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
    return (
        <>
        <KeyboardAvoidingView 
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined} 
        enabled>
        <ScrollView
            contentContainerStyle={{flexGrow:1}}
            
        >
            <Container>
            <Image source={logoImg} />
            <Title>Faça seu logon</Title>

            <Form ref={formRef} onSubmit={data => {console.log(data)}}>
                <Input name="email" icon="mail" placeholder="E-mail" />
                <Input name="name" icon="user" placeholder="Nome" />
                <Input name="password" icon="lock" placeholder="Senha" />

                <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
            </Form>


            </Container>
        </ScrollView>
    </KeyboardAvoidingView>
    
    <CreateAccuntButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <CreateAccuntButtonText>Voltar</CreateAccuntButtonText>
    </CreateAccuntButton>
    
    </>
    )
}

export default SingIn;