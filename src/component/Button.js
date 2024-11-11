import React from 'react'
import '../css/component/button.scss'

const Button = () => {
  return (
    <button className='b_btn'>
        Watch now
    </button>
  )
}

const Button2 = () => {
  return(
    <button className='b_btn2'>
      Watch trailer
    </button>
  )
}

const Button_content = (props)=>{
  return(
    <button className='c_btn'>
      view more
    </button>
  )
}

const Button_form = ()=>{
  return(
    <button className='f_btn'>
      검색
    </button>
  )
}

export {Button, Button2, Button_content, Button_form}