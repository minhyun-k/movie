import React from 'react'
import '../../css/pages/detail.scss'
import apiConfig from '../../api/apiConfig'

const Detail_casts = (props) => {

    
  return (

            <div className='casts_item'>
                <div className='casts_item_img' style={{backgroundImage:`url(${apiConfig.s(props.item.profile_path)})`}}></div>
                <p className='casts_item_name'>{props.item.original_name}</p>
            </div>
  )
}

export default Detail_casts