import React, { useContext } from 'react';
import { Button } from './';
// import Login from "../pages/login"
import { useLocation, useHistory } from 'react-router-dom';
import { userContext } from '../authUserProvider';

export const Navigation = (props) => {
    const { user } = useContext(userContext)
    const { logOut } = useContext(userContext)
    let location = useLocation();
    let history = useHistory();

    const goLogin = () => {
        history.push('/login');
    }
    const toHistory = () => {
        history.push('/history')
    }

    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */
    //    console.log(user)

    return (
        <div className='w100 flex justify-end items-center mt-56 mr-78'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {/* <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary upperCase btn'>Нэвтрэх</Button> */}
            {
                user && user.username !== ""
                    ?
                    <div className="flex-row ml-40 ">
                        <div className="font-ubuntu fs-20 lh-23 bold c-black mauto2 ml-40 upperCase">{user.username}</div>
                        {/* <svg className="mauto2" width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L10.5 10.5L19 2" stroke="#02B589" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> */}
                        <div className="">
                            <div onClick={toHistory} className="font-ubuntu fs-20 lh-23 bold c-primary ml-10 upperCase"> history</div>
                            <div onClick={logOut} className="font-ubuntu fs-20 lh-23 bold c-primary ml-10 upperCase"> log out</div>
                        </div>
                    </div>
                    : location.pathname === '/login' ? <div></div> : <Button onClick={() => goLogin()} className="font-ubuntu fs-20 lh-23 bold c-default h-44 ph-26 ml-40 b-primary upperCase btn bsnone">Нэвтрэх</Button>
            }
        </div>
    );
};