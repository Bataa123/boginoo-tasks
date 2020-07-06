import React from 'react';
// import { useEffect } from 'react-dom';
import { useHistory } from 'react-router-dom';
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

//  const usePageViews = () => {
//     let location = useLocation();
//     if(location.pathname == '/login') {

//     }
//     console.log(location)
//   }


export const SignUp = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/');
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
                <div className='font-ubuntu  c-primary bold fs-32 lh-37 fw-bold flex-center'>Нууц үг сэргээх</div>
                <div className="font-ubuntu lh-18 normal w-290 text-center mSpecial3 lh-25 flex ml-121">Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</div>
                <div className="font-ubuntu mSpecial w-335 lh-18 normal">Цахим хаяг</div>
                <div className='mt-5 flex flex-center'>
                    <Input type="password" className="mauto bShadowInput bsnone fs-20 ph-24 w-381 pb-10" placeholder='name@mail.domain' />

                    <Button className="mt-32 font-ubuntu fs-20 lh-23 bold c-default h-44 w-383 ph-26 b-primary upperCase btn bsnone">Илгээх</Button>
                </div>
            </div>
        </Layout>
    )
}
