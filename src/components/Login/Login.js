import React from 'react';
import * as C from '../Styled.LoginRegister';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebase-config';

const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().email().required("Insira o Email"),
        password: yup.string().min(6,"Minimo de 6 caracteres").max(15,"Máximo 16 caracteres").required("Insira a senha")
    })

    let { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const submitLogin = async (data) => {
        try{
            document.querySelector('#formulary').reset();
            const user = await signInWithEmailAndPassword(auth, data.email, data.password);
        } catch (error) {
            console.log(error.message)
        }
        
    }
    

    return ( 
        <C.Container>
            <C.Form onSubmit={handleSubmit(submitLogin)} id="formulary">
                <C.Label className='formLabel'>Email de Login:</C.Label>
                <C.Input type="text" placeholder="Email..." {...register("email")}/>
                <C.Label className='ErrorMessage'>{errors.email?.message}</C.Label>
                <C.Label className='formLabel'>Senha de Login:</C.Label>
                <C.Input type="password" placeholder="password..." {...register("password")}/>
                <C.Label className='ErrorMessage'>{errors.password?.message}</C.Label>
                <C.Button type="submit">LOGAR</C.Button>
                <C.Link to="/a">Esqueceu a senha?</C.Link>
            </C.Form>
        </C.Container>
     );
}
 
export default Login;