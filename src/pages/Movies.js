import React from 'react'
import Form from '../component/Form'
import Content_grid from '../component/Content/Content_grid'
import PageTitle from '../component/PageTitle'
import '../css/pages/Movies.scss'
import { useLocation } from 'react-router-dom'

const Movies = (props) => {
  const location = useLocation()
  const urlT = location.state.type;
  console.log(urlT);
  return (
    <>
      <PageTitle title={urlT}/>
      <div className='container'>
        <div className='grid'>
          <div className='searchbox'>
            <Form cateType={urlT}/>
          </div>
      
            <Content_grid cateType={urlT} type="popular"/>
      
        </div>
      </div>
    </>
  )
}

export default Movies