import React from 'react';
import { Button } from './';
// import Login from "../pages/login"
import { useLocation, useHistory } from 'react-router-dom';

export const Navigation = (props) => {
    let location = useLocation();
    let history = useHistory();

    const goLogin = () => {
        history.push('/login');
    }
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */

    return (
        <div className='w100 flex justify-end items-center mt-56 mr-78'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {/* <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary upperCase btn'>Нэвтрэх</Button> */}
            {
                location.pathname === '/login' ? <div></div> : <Button onClick={() => goLogin()} className="font-ubuntu fs-20 lh-23 bold c-default h-44 ph-26 ml-40 b-primary upperCase btn bsnone">Нэвтрэх</Button>
            } 
        </div>
    );
};