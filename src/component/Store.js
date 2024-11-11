import { create } from 'zustand'
import apiFun from '../api/apiFun';



const store = create((set) => ({
  data: [],
  detail: [],
  dataCtrl : async function(action){
    let res;
    switch(action.type){

        case 'list' : 
        res = await apiFun.List1("/", action.props.cateType, action.props.type, action.props.id); set({data:res.data.results}); break;

        case 'search' : 
        res = await apiFun.Search("/movies", action.cate, action.value); set({data:res.data.results}); break;

        case 'detail' :
        res = await apiFun.Detail("/detail", action.location.state.type.cateType, action.location.state.type.item.id); set({detail:res.data}); break;
        
        // case 'delete' :
        // res = await instance.delete(`?id=${action.data}`); break;
    }
        

    // set({data:10})
    // set((d)=>{
    //     console.log(d)
    //     return {data:n}
    // })
  }
}))

export default store