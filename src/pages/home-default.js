import React, { useContext, useState } from 'react';
// import { useHistory } from "react-router-dom";
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { userContext } from '../authUserProvider';

export const HomeDefault = () => {
    const { createNewUrl } = useContext(userContext);
    const [url, setUrl] = useState({
        originialUrl: '',
    })

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
                    <Input onChange={(e) => setUrl({ ...url, originialUrl: e.target.value })} className="bShadowInput bsnone fs-20 ph-24 w-550 pb-10" placeholder='https://www.web-huudas.mn'/>
                    <Button onClick={() => createNewUrl(url.originialUrl)} className="font-ubuntu fs-20 lh-23 bold c-default h-44 ph-26 ml-16 b-primary upperCase btn bsnone">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}