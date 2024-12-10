import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='container-fluid p-3' id='header'>
        <div className='row'>
            <div className='col' id='head'>
                <Link className='headerLink' to= "/" ><h1> Tensor Go </h1></Link>
                <Link className='headerLink' to= "/feedback" ><h5 className='mt-3'>Feedback</h5></Link>
                <Link className='headerLink' to= "/comments" ><h5 className='mt-3'>Comments</h5></Link>
                <Link className='headerLink' to= "/profile" ><h5 className='mt-3'>
                    
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                    
                    </h5></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header