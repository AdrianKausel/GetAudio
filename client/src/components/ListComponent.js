import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FileTest from './FileTest';
import MediaDisplay from './mediaDisplay';


const ListComponent =({selectTag1})=>{

    const [sounds,setSounds]=useState([])

    useEffect(()=>{
        // axios.get('http://localhost:8000/api/newSamples/')
        // .then(res=>{
        //     console.log('this is res....', res)
        //     console.log('this is res.data....', res.data)
        //     console.log('this is res.data.userComp....', res.data.userComp)
        //     console.log('selectTag1......', selectTag1)
        //     console.log('sounds......', sounds)
        //     console.log('sounds[0].name  ......', sounds)

        //     const sounds_temp=[]
        //     res.data.userComp.forEach((sound)=>{
        //         if(sound.tag.includes(`${selectTag1}`)){
        //             sounds_temp.push(sound)
        //         }
        //     })
        //     setSounds(sounds_temp)
        // })
    },[selectTag1])
    
    
    return(

        <div /* className="div-2" */ >

        <h2> <span className='span-tag'>  Audio tagged by : </span>  {selectTag1} </h2>

        
        {sounds.map((e,i)=>{
            return(
                <div className='archivos-audio' > <h3>{e.artist} / {e.name}{e.title}</h3>  
                <p>Tags : {e.tag[0]},{e.tag[1]},{e.tag[2]}</p>
                <p>Play:</p>
                </div>
            )
        }
        
        )}

        
        </div>

    )
}

export default ListComponent;
