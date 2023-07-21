import imageholder from './placeholder.png';
import './memegen.css';
import { useState } from 'react';
function Memegen()
{
    const [url,setURL]=useState("")
    const [upperText,setUpperText]=useState("")
    const [lowerText,setLowerText]=useState("")
    function FetchRandomMeme()
    {
        fetch("https://api.imgflip.com/get_memes").then(response=>{
            return response.json()
        }).then(data=>{
            const RandomIndex=Math.floor(Math.random()*data.data.memes.length)
            console.log(data.data.memes[RandomIndex])
            setURL(data.data.memes[RandomIndex].url)
        })
    }
    function ChangeUpperText(event)
    {
        setUpperText(event.target.value)
    }
    function ChangeLowerText(event)
    {
        setLowerText(event.target.value)
    }
    return(
        <>
            <input onChange={ChangeUpperText} type="text" className="uppertext" placeholder="Upper Text"></input>
          <input onChange={ChangeLowerText} type="text" className="lowertext" placeholder="Lower Text"></input>
          <div className='generator-container'>
        <div onClick={FetchRandomMeme}  className="image-generator" >
            <p>Get a new meme Image</p>
            <img src={imageholder}>
          </img>
          </div>
         <div className='meme-contaier'>
            <img  src={url}>
            </img>
            <p className='upper-text'>{upperText}</p>
            <p className='lower-text'>{lowerText}</p>
         
         
         </div>
         
        
        </div>
        </>
           
        
    )
}


export {Memegen};
