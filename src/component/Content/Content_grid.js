import React, { useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfig'
import apiFun from '../../api/apiFun'
import { Button_content } from '../Button'
import Content_card from './Content_card'
import '../../css/component/content.scss'
import store from '../Store'

const Content_grid = (props) => {
    const [items, setItems] = useState([])
    const {data, dataCtrl} = store()

    useEffect(()=>{
        async function fetchData(){
            await dataCtrl({type:"list", props})
        }
        fetchData();
    },[props])
    if(!data.length)return<></>

    return(
        <div className='content_grid'>
            {
                data.map((item)=>(
                    <div className='listbox' >
                        <Content_card item={item} cateType={props.cateType}/>
                    </div>
                    
                ))
            }
        </div>

    )
}

export default Content_grid