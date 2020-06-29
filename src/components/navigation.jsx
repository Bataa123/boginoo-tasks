import React from 'react';
import { Button } from './';

export const Navigation = (props) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */

    return (
        <div className='w100 flex justify-end items-center mt-56 mr-78'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {/* <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary upperCase btn'>Нэвтрэх</Button> */}
            <Button className="font-ubuntu fs-20 lh-23 bold c-default h-44 ph-26 ml-40 b-primary upperCase btn">Нэвтрэх</Button>
        </div>
    );
};