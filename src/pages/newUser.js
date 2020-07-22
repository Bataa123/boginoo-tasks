import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { userContext } from '../authUserProvider';

export const NewUSer = () => {

    const history = useHistory();
    const { createNewUser } = useContext(userContext);

    const goHome = () => {
        history.push('/');
    }

    // const { user, setUser } = useContext(userContext);


    const [user, setUser] = useState({
        email: "",
        password: "",
        repassword: ""
    })

    // const checkPassword = () => {
    //     if (user.password == user.repassword ) {
    //         // alert('user uussen')
    //         console.log('user uussen')
    //     } else {
    //         // alert('repassword buruu bn')
    //         console.log('repassword buruu bn')
    //     }
    // }

    const signUp = () => {
        createNewUser(user.email, user.password, user.repassword);
    }

    // console.log(user)
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
                    <Input
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        id="email" type="email"
                        className=" mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='name@mail.domain' />
                </div>
                <div className="font-ubuntu mSpecial2 w-335 lh-18 normal">Нууц үг</div>
                <div className='mt-5 flex flex-center'>
                    <Input
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        id="password" type="password"
                        className="mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='••••••••••' />
                </div>
                <div className="font-ubuntu mSpecial2 w-335 lh-18 normal">Нууц үгээ давтна уу?</div>
                <div className='mt-5 flex flex-center'>
                    <Input
                        onChange={(e) => setUser({ ...user, repassword: e.target.value })}
                        id="repassword" type="password"
                        className="mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='••••••••••' />
                    <Button onClick={signUp} className=" font-ubuntu fs-20 lh-23 bold c-default h-44 w-383 ph-26 b-primary upperCase btn bsnone mt-32">Бүртгүүлэх</Button>
                </div>
            </div>
        </Layout>
    )
}
