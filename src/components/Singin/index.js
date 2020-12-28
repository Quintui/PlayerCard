import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton, 
    Text
} from './SingInElements'

const SingIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to = '/'>Quint</Icon>
                <FormContent>
                    <Form>
                        <FormH1>Press some info about you </FormH1>
                        <FormLabel htmlFor ='for'>Nickname</FormLabel>
                        <FormInput htmlFor = 'text' required/>
                        <FormLabel htmlFor = 'for'> Email </FormLabel>
                        <FormInput htmlFor = 'email' required/>
                        <FormLabel htmlFor ='for'>Game</FormLabel>
                        <FormInput htmlFor = 'text' required/>
                        <FormButton type = 'submit'>Continue</FormButton>
                        <Text> Don't forget write game 😇 </Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>  
        </>
    )
}

export default SingIn
