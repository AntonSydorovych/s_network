import React from 'react';
import preloader from './../../../Assets/preloader.svg';


export const Preloader = (props) =>{
    return <img src={preloader} style = {{width: `${props.width || '100px'}` }} />
}