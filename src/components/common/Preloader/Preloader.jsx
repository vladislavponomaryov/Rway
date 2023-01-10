import React from 'react';
import preloader from '../../../assets/images/Preloader.gif'
import s from './Preloader.module.css'

const Preloader = () => {
    return <div className={s.preloaderWrapper}>
        <img src={preloader} alt="Preloader" className={s.preloader} />
    </div>
}

export default Preloader;