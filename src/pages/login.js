import React from 'react';
import { useEffect } from 'react-dom';
import { useLocation, useHistory } from 'react-router-dom';
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

//  const usePageViews = () => {
//     let location = useLocation();
//     if(location.pathname == '/login') {

//     }
//     console.log(location)
//   }


export const Login = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    const SwitchPassword = () => {
        history.push('/signUp')
    }

    return (
        <Layout>
            <div className='h100 justify-center flex flex-col'>
                <div className='flex justify-center h-40 items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div onClick={() => goHome()} className='font-lobster c-primary fs-56 lh-70 mb-64 flex-center'>Boginoo</div>
                <div className='font-ubuntu  c-primary bold fs-32 lh-37 fw-bold mb-40 flex-center'>Нэвтрэх</div>
                <div className="font-ubuntu mSpecial w-335 lh-18 normal">Цахим хаяг</div>
                <div className='mt-5 flex flex-center ' >
                    <Input className=" mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='https://www.web-huudas.mn' />
                </div>
                <div className="font-ubuntu mSpecial2 w-335 lh-18 normal">Нууц үг</div>
                <div className='mt-5 flex flex-center'>
                    <Input type="password" className="mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='••••••••••' />
                    <div className="flex-row  mt-24 mb-39 w-381">
                        <div className="w-20 h-20 br-primary-1 bradius-4"></div>
                        <div className="font-ubuntu c-primary lh-18 normal ml-8">Цахим хаяг</div>
                        <div onClick={() => SwitchPassword()} className="font-ubuntu lh-18 normal flex ml-121">Нууц үгээ мартсан</div>
                    </div>
                    
                    <Button className=" font-ubuntu fs-20 lh-23 bold c-default h-44 w-383 ph-26 b-primary upperCase btn bsnone">Нэвтрэх</Button>

                    <div className="font-ubuntu c-primary lh-18 normal mt-24 ml-8">Шинэ хэрэглэгч бол энд дарна уу?</div>
                </div>
            </div>
        </Layout>
    )
}
