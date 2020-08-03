import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../style/main.scss'
import '../style/typograph.scss'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { userContext } from '../authUserProvider';

export const History = () => {
    const { user } = useContext(userContext)
    const history = useHistory();
    const goHome = () => {
        history.push('/');
    }
    const { createNewUrl } = useContext(userContext);
    const [url, setUrl] = useState({
        givenUrl: '',
        tinyUrl: ''
    })

    const TakeUrl = () => {
        if (user.history.length !== 0) {
            return user.history.map((cur, input) => {
                return (
                    <div key={input} className="flex-row justify-between">
                        <div className='flex-column'>
                            <div style={{ opacity: '0.5' }} className='font-ubuntu w-350 mt-40 fs-16 lh-18  c-black'>Өгөгдсөн холбоос:</div>
                            <div>{cur.givenUrl}</div>
                        </div>
                        <div className='flex-column'>
                            <div style={{ opacity: '0.5' }} className='font-ubuntu w-350 mt-40 fs-16 lh-18 c-black'>Богино холбоос:</div>
                            <div>{cur.tinyUrl}</div>
                        </div>
                    </div>
                )
            })
        }
        return (<></>)
    }


    return (
        <Layout>
            <div className='h100 justify-center flex flex-col'>
                <div className='flex justify-center h-40 items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>

                <div onClick={goHome} className='font-lobster c-primary fs-56 lh-70 mb-64 flex-center'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center mb-64 items-center'>
                    <Input onChange={(e) => setUrl({ ...url, givenUrl: e.target.value })} className="bShadowInput bsnone fs-20 ph-24 w-550 pb-10" placeholder='https://www.web-huudas.mn' />
                    <Button onClick={() => createNewUrl(url.givenUrl)} className="font-ubuntu fs-20 lh-23 bold c-default h-44 ph-26 ml-16 b-primary upperCase btn bsnone">Богиносгох</Button>
                </div>
                <div className="font-ubuntu w-755 mauto" >
                    <div className='font-ubuntu w-755 fs-32 lh-32 bold c-primary'>Түүх</div>
                    <TakeUrl />
                    <svg width="789" height="1" viewBox="0 0 789 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4.37114e-08" y1="0.5" x2="789" y2="0.500069" stroke="#E2E2E2" />
                    </svg>
                </div>
            </div>
        </Layout>
    )
}