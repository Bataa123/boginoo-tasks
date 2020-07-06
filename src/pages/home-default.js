import React from 'react';
// import { useHistory } from "react-router-dom";
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    // const history = useHistory();

    // const goHome = () => {
    //     history.push('/');
    // }

    return (
        <Layout>
            <div className='h100 justify-center flex flex-col'>
                <div className='flex justify-center h-40 items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>

                <div className='font-lobster c-primary fs-56 lh-70 mb-64 flex-center'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="bShadowInput bsnone fs-20 ph-24 w-550 pb-10" placeholder='https://www.web-huudas.mn' />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-44 ph-26 ml-16 b-primary upperCase btn bsnone">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}