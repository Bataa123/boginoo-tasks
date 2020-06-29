import React from 'react';
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 flex-center'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input placeholder='https://www.web-huudas.mn' />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-44 ph-26 ml-16 b-primary upperCase btn">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}