import React,{useEffect,useRef,useImperativeHandle,forwardRef,useState,useCallback} from 'react';
import {Container,TextInput, Icon} from './styles';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';


interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

interface InputValueReference {
    value: string;
}

interface InputRef{
    focus():void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({name,icon, ...rest}, ref) => {
    const inputElementRef = useRef<any>(null);
    const {registerField,defaultValue = '',fieldName,error} = useField(name);
    const inputValueRef = useRef<InputValueReference>({value : defaultValue});
    
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useImperativeHandle(ref,() => ({
        focus(){
            inputElementRef.current.focus();
        }
    }))

    useEffect(() => {
        registerField({
            name:fieldName,
            ref:inputValueRef.current,
            path:'value',
            clearValue(){
                inputValueRef.current.value = '';
            }
        })
    },[fieldName,registerField])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    },[])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputValueRef.current.value);
    },[])

    return (
    <Container isFocused={isFocused}>
        <Icon name={icon} size={20} color={isFocused || isFilled ? '#FF9000' : '#666360'} />
        <TextInput placeholderTextColor="#666360" {...rest} onChangeText={value => {
            inputValueRef.current.value = value
        }} 
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        />
    </Container>
    )
}
export default forwardRef(Input);