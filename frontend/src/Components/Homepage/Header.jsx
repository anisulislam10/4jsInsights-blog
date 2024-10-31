import React, { useEffect, useState } from 'react'
import im1 from './../../assets/tab1.png'
import { Link } from 'react-router-dom'
import Categoires from './Categories'

const Header = () => {
    const plusPoint=["MongoDB","MySQL"]
    const [text, settext] = useState('');
    const [isDeleting, setisDeleting] = useState(false);
    const [loopNum, setloopNum] = useState(0);
    const [typingSpeed, settypingSpeed] = useState(150);
    useEffect(() => {
      const handlyTyping=()=>{
        const currentRole=plusPoint[loopNum % plusPoint.length];
        const updatedText=isDeleting
        ?
        currentRole.substring(0,text.length-1)
        :
        currentRole.substring(0,text.length+1);
        settext(updatedText);
        if(!isDeleting && updatedText=== currentRole){
            setTimeout(()=>setisDeleting(true),1050);
        }
        else if (isDeleting && updatedText=== ''){
            setisDeleting(false);
            setloopNum(loopNum+1);
            settypingSpeed(50);
        }
      };
      const typingTimeout=setTimeout(handlyTyping,typingSpeed);
      return ()=>clearTimeout(typingTimeout);
    
    }, 
     [text,isDeleting,loopNum,typingSpeed,plusPoint]);
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
        <div>
            <h1 className='text-[65px] font-semibold'>Welcome to 4js Insights</h1>
            <h2 className='text-[20px]'>Discover new blogs about 4js {"{React,Node,Express,Vue}"} + {text}</h2>
        </div>

        <div className='my-8 flex items-center justify-center gap-1'>
            <div className='w-4/2'>
                <img src={im1} alt="" className='rounded  h-[60vh] object-cover mr-[300px]'/>
            </div>

            <div className=''>
            <Categoires/>
            </div>
        </div>
        
    </div>
  )
}
export default Header