import React from 'react'
import { Link } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import 'boxicons'


const Content_card = (props) => {


    return(
        <Link to="/detail" className='content_card'  state={{type:props}} >
            <div className='c_img' style={{backgroundImage: `url(${apiConfig.s(props.item.poster_path)}`}}>                
            <button className='card-btn'>
                <box-icon name='play' animation='tada'></box-icon>
            </button>
            </div>
            <div className='c_title'>
                <p>{!props.item.title ? props.item.name : props.item.title}</p>
            </div>
        </Link>
    )
}

export default Content_card