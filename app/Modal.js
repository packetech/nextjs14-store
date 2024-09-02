"use client"
import React from 'react'
import ReactDom from 'react-dom'

export default function Modal() {

  // this code block was used to wait until the DOM is ready, then ReactDOM.createPortal was called, smoljames didn't have this in nextjs 13. I did this because of the "Target container is not a DOM element Error" that I was getting, see more comments at the end of this file
  const [domReady, setDomReady] = React.useState(false)
  React.useEffect(() => {
    setDomReady(true)
  }, [])


  return domReady
    ? ReactDom.createPortal(
    <div className='fixed top-0 left-0 w-screen h-screen z-50'>
      <div className='bg-transparent absolute inset-0'></div>
      <div className='flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4'>
        <div className='flex items-center p-6 justify-between text-xl relative'>
          <h1>Cart</h1>
          <i className="fa-solid fa-xmark"></i>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3'></div>   {/* this added the line under the Cart and close icon */}
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
  : null
}

/* 

smolejames code generate the "Target container is not a DOM element Error"

his code block was:

export default function Modal() {


  return ReactDom.createPortal(
    <div>Modal</div>,
    document.getElementById('portal')
  )
}


===============but i found the solution below====================

You can wait until the DOM is ready using React.useEffect, and then you call ReactDOM.createPortal:

function Component() { 
  const [domReady, setDomReady] = React.useState(false)

  React.useEffect(() => {
    setDomReady(true)
  }, [])

  return domReady 
    ? ReactDOM.createPortal(<div>Your Component</div>, document.getElementById('container-id')) 
    : null
}


*/