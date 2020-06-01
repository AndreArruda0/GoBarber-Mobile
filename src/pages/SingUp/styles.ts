import styled from 'styled-components/native';
    
export const Container = styled.View`
flex:1;
align-items:center;
justify-content:center;
padding: 0 30px;
`;

export const Title = styled.Text`
font-size:20px;
color : #f4ede8;
margin: 64px 0 24px;
`

export const ForgotPassword = styled.TouchableOpacity`
margin-top:24px;
`;

export const ForgotPasswordText = styled.Text`
color: #f4ede8;
font-size:16px;
`;

export const CreateAccuntButton = styled.TouchableOpacity`
position:absolute;
left:0;
bottom:0;
right:0;
background:#312e38;
border-top-width:1px;
border-color:#232129;
padding:16px 0px 16px;

justify-content:center;
align-items:center;
flex-direction:row;
`;

export const CreateAccuntButtonText = styled.Text`
color:#fff;
font-size:18px;

`;