import React from 'react'
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form'
import Header from '../src/components/Header'
import Form, { Container, TextContainer } from '../src/components/Form'
import Field from '../src/components/Field'
import Button from '../src/components/Button/'
import { init } from 'emailjs-com';

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => sendEmail(data);

    const NEXT_PUBLIC_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const NEXT_PUBLIC_EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    init(NEXT_PUBLIC_EMAILJS_USER_ID);

    function sendEmail(data) {


        emailjs.send(NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, data, NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((result) => {
                alert("Mensagem enviada com sucesso")

            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <Header />
            <Container>

                <TextContainer>
                    <p>Tem alguma dúvida, crítica, sugestão ou pedido? <br /><br />
                        É criador de conteúdo e gostaria de ter seu RPG por aqui ou remover algum conteúdo seu?<br /><br />
                        Mande sua mensagem!
                    </p>
                </TextContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Field.Text type="text" name="name" placeholder="Nome" register={register} />
                    {errors.name?.type === 'required' && <span>Informe um Nome</span>}
                    <Field.Text type="email" name="email" placeholder="Email" register={register} />
                    {errors.email?.type === 'required' && <span>Informe um Email válido</span>}
                    <Field.Area name="message" placeholder="Escreva sua mensagem" rows="9" register={register} />
                    {errors.message?.type === 'required' && <span>Digite uma mensagem</span>}
                    <Button type="submit">Enviar</Button>
                </Form >
            </Container>

        </>
    )
}

export default Contact;