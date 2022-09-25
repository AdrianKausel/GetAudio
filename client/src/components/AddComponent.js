import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AddComponent =()=>{
    
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    
    const [error,setError]=useState('');

    const [tag,setTag]=useState([]);
    const [title,setTitle]=useState([]);
    const [URL,setURL]=useState([]);


    const handleSubmit=e=>{
        e.preventDefault();
        //console.log('Activado handle Submit');
        axios.post('http://localhost:8000/api/newSamples/new',{
        //axios.post('/api/newSample/new',{
                artist: 'Hans Zimmer',       
                title:title,
                //description:description,
                active:true,
                tag:tag,
                URL:URL
        })
        .then(res=>{
            console.log(res);
            setTag([])
            if(res.data.errors){
                console.log('res data errors....', res.data.errors)
                setError(res.data.errors)
            }
            else{navigate('/')} 

        })
    }

    const backto=E=>{
        navigate('/')
    }

    const handleTag=e=>{
        e.preventDefault()
        console.log('hola en handle Tag')
        console.log('e.target.value....',e.target.value)
        const newTag=e.target.value
        //console.log('newTag .....',newTag)
        //console.log(Tag)
        setTag([...tag,newTag])
        console.log('tag .....',tag)

    }
    
    return(
        <div className="div-2">

            <h2>Add File</h2> 
            
            <div className='main-add'>

                <form onSubmit={handleSubmit} className="add-form" >
                    
                    <label>Title:
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
                    </label>
                    <label>URL:
                        <input type="textbox" onChange={(e)=>setURL(e.target.value)} />
                    </label>


                    <br/>
                    <label>Select Tags:</label>

                    <br/>

                    <button type='button' value="Terror" onClick={(e)=>handleTag(e)} >Terror</button>
                    <button type='button' value="FX" onClick={(e)=>handleTag(e)}>FX</button>
                    <button type='button' value="Action" onClick={(e)=>handleTag(e)}>Action</button>
                    <button type='button' value="Ambient" onClick={(e)=>handleTag(e)}>Ambient</button>
                    <button type='button' value="Sci-fi" onClick={(e)=>handleTag(e)}>Sci-fi</button>
                    <button type='button' value="Techno" onClick={(e)=>handleTag(e)}>Techno</button>

                    <br/>

                    <br/>

                    <br/>

                    {error!='' ? <p className='error'> All values are required. </p> : null }

                    <button>Add File</button>
                    <button onClick={backto} className='cancel-button' >Cancel</button>
                </form>

            </div>
        
        </div>

    )
}

export default AddComponent;
