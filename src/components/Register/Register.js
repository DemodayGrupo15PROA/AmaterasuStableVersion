import React from 'react';
import * as C from '../Styled.LoginRegister';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebase-config';

const Register = () => {

    const schema = yup.object().shape({
        email: yup.string().email().required("Insira o Email"),
        password: yup.string().min(6,"Minimo de 6 caracteres").max(15,"Máximo 16 caracteres").required("Insira a senha"),
        confirmPassword: yup.string().required("Confirme a senha").oneOf([yup.ref("password"),null],"Senhas diferentes"),
        terms: yup.boolean().oneOf([true], "Deve aceitar os termos de usuário"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

      const submitRegister = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        } catch (error){
            console.log(error.message)
        }
    }


    return (
        <C.Container>
            <C.Form onSubmit={handleSubmit(submitRegister)}>
                <C.Label className='formLabel'>Email:</C.Label>
                <C.Input type="text" {...register("email")} placeholder="Email..." errorMessage={errors.email? true:false}/>
                <C.Label className='ErrorMessage'>{errors.email?.message}</C.Label>
                <C.Label className='formLabel'>Senha:</C.Label>
                <C.Input type="password" {...register("password")} placeholder="Senha..." errorMessage={errors.password? true:false}/>
                <C.Label className='ErrorMessage'>{errors.password?.message}</C.Label>
                <C.Label className='formLabel'>Confirme a Senha:</C.Label>
                <C.Input type="password" {...register("confirmPassword")} placeholder="Confirmar senha..." errorMessage={errors.confirmPassword? true:false}/>
                <C.Label className='ErrorMessage'>{errors.confirmPassword?.message}</C.Label>
                <div>
                <C.Input type="checkbox" {...register("terms")}/>
                <C.Link to="/as">Aceito os termos de usuário</C.Link>
                </div>
                <C.Label className='ErrorMessage'>{errors.terms?.message}</C.Label>
                <C.Button type="submit">CADASTRAR</C.Button>
            </C.Form>
        </C.Container>
    );
};

export default Register;