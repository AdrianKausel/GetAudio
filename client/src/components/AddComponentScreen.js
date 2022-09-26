import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";


const AddComponentScreen=()=>{


    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    
    const [error,setError]=useState('');

    const [tag,setTag]=useState([]);
    const [title,setTitle]=useState([]);
    const [url,setUrl]=useState([]);


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
                url: url
        })
        .then(res=>{
            console.log(res);
            setTag([])
            if(res.data.errors){
                console.log('res data errors....', res.data.errors)
                setError(res.data.errors)
            }
            else{navigate('/')} 
            alert(`Se ha agregado ${title} a la colección!`)

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
        <div className="backround1 ">
            <div style={{height: '150px'}}></div>
            <Container className='audioinfo w-75 d-flex flex-wrap flex-row justify-content-center'>
                <form 
                    className="w-100 mb-3"
                    style={{padding: '10px', textAlign: 'center'}}
                    action="/profile" 
                    method="post" 
                    enctype="multipart/form-data">
                    <input type="file" name="avatar" />
                    <p>Acá va el contenido del formulario Multer</p>
                </form>

                <h2>Add File</h2> 
                
                <div className='main-add'>

                    <form onSubmit={handleSubmit} className="add-form" >
                        
                        <label>Title:
                            <input type="text" onChange={(e)=>setTitle(e.target.value)} />
                        </label>
                        <label>URL:
                            <input type="textbox" onChange={(e)=>setUrl(e.target.value)} />
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

                        {error!='' ? <p className='error'> All values are required. </p> : null }

                        <br/>

                        <button>Add File</button>
                        <button onClick={backto} className='cancel-button' >Cancel</button>
                    </form>

                </div>

            </Container>
        
        </div>

    )
}

export default AddComponentScreen;