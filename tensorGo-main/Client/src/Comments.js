import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Comments() {


    var [data,setData] = useState([])

    var userCount = 1

    useEffect( ()=> {
        axios.get("http://localhost:3333/api/getFeedback").then( (res) =>{
            setData(res.data)
        } )
    }, [])

  return (
    <>
    <div>
        <div id='comments' >
        <h1 className='text-center mb-3 mt-3'>Comments</h1>
        
        </div>
    

    <div className='container'>
        <div className='row'>
            <div className='col border border-dark p-5'>
                <ol>
            {
        data.map( (data, i ) => {
            console.log(data)
            return (
                
                <li> <div id='comm'><h5> User {userCount + i} </h5> <p className='ms-3'> ({data.category}) </p></div>
                <p className='m-0'>Rating : {data.rating}</p>
                <p> {data.comments} </p>
                </li>

            )
        } )
    }   </ol>
            </div>
        </div>
    </div>
   
    </div>
    </>
  )
}

export default Comments