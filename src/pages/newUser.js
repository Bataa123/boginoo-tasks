import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { userContext } from '../authUserProvider';

export const NewUSer = () => {

    const history = useHistory();
    const {createNewUser} = useContext(userContext);

    const goHome = () => {
        history.push('/');
    }

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    console.log(user)
    return (
        <Layout>
            <div className='h100 justify-center flex flex-col'>
                <div className='flex justify-center h-40 items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div onClick={() => goHome()} className='font-lobster c-primary fs-56 lh-70 mb-64 flex-center'>Boginoo</div>
                <div className='font-ubuntu  c-primary bold fs-32 lh-37 fw-bold mb-40 flex-center'>Бүртгүүлэх</div>
                <div className="font-ubuntu mSpecial w-335 lh-18 normal">Цахим хаяг</div>
                <div className='mt-5 flex flex-center ' >
                    <Input onChange={() => setUser({email: document.getElementById('email').value, password: user.password})} id="email" className=" mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='name@mail.domain' />
                </div>
                <div className="font-ubuntu mSpecial2 w-335 lh-18 normal">Нууц үг</div>
                <div className='mt-5 flex flex-center'>
                    <Input onChange={() => setUser({password: document.getElementById('password').value, email: user.email})} id="password"  type="password" className="mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='••••••••••' />
                </div>
                <div className="font-ubuntu mSpecial2 w-335 lh-18 normal">Нууц үгээ давтна уу?</div>
                <div className='mt-5 flex flex-center'>
                    <Input type="password" className="mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='••••••••••' />
                    <Button onClick={() => createNewUser({user}) } className=" font-ubuntu fs-20 lh-23 bold c-default h-44 w-383 ph-26 b-primary upperCase btn bsnone mt-32">Бүртгүүлэх</Button>
                </div>
            </div>
        </Layout>
    )
}
