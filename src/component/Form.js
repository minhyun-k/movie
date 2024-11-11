import React, { useEffect, useState } from 'react'
import '../css/component/form.scss'
import { Button_form } from './Button'
import apiFun from '../api/apiFun';
import swal from 'sweetalert'
import store from './Store';

const Form = (props) => {

  const {dataCtrl} = store();
  let insert =async (e)=>{
    e.preventDefault();
    let value = e.target.search.value
    let cate = props.cateType 
    console.log(cate)
    if(value !==''){
      await dataCtrl({type:"search", cate, value})
    }else{
      swal("내용을 입력해주세요!")
    }
  }
  return (
    <div className='form'>
      <form className='search-form' onSubmit={insert}>
        <input type='text' name='search' placeholder="Enter Keyword" />
        <span className='input-border'></span>
      <Button_form/>
      </form>
    </div>
  )
}

export default Form