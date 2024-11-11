import React from 'react'
import '../css/component/pagetitle.scss'

const PageTitle = (props) => {
  return (
    <div className='pagetitle'>
        <h2>{props.title}</h2>
    </div>
  )
}

export default PageTitle