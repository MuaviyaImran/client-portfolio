import React from 'react';
import preLoader from "./lottie/preLoader.json";
import { personalData } from "../dataStore.js";
import Lottie from 'lottie-react';

const PreLoader = () => {
    const style = {
        height: 300,
      };
  return (
    <div className=' flex flex-col justify-center items-center min-h-screen'>
      <Lottie animationData={preLoader} style={style}/>
      <div className='text-xl font-preLoaderFont'>
      <span className="grey-color"> &lt;</span>
        <span className="splash-title">{personalData.name}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
};

export default PreLoader;
