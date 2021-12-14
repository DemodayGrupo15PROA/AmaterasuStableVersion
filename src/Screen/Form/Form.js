import React, { useState } from 'react';
import * as C from './Styled.Form';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

import LogoBranca from '../../Assets/images/logo_amaterasu_branca.png';
// import LogoGem  from '../../Assets/images/logo_amaterasu2.png';

const Form = () => {
    const [page,setPage] = useState(0);

    return (
        <C.Container>
            <C.SmallContainer className="sideOne">
                <img src={LogoBranca} alt=""/>
            </C.SmallContainer>
            <C.SmallContainer className="sideTwo">
                {/* <img src={LogoGem} alt=""/> */}
                {page === 0 ? <Login/>:<Register />}
                {page === 1 && <label>Já Possui uma conta? <span onClick={() => setPage(0)}>Logue-se</span></label>}
                {page === 0 && <label>Não Possui uma conta? <span onClick={() => setPage(1)}>Cadastre-se</span></label>}
            </C.SmallContainer>
        </C.Container>
     );
}
 
export default Form;