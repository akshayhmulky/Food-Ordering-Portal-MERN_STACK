import { createContext, useEffect, useReducer} from "react";
import axios from 'axios';



//We pass on CountContext to access values from it using useContext()
export const CountContext = createContext()


//created countReducer function which can be used within useReducer
//it takes two parameter i,e latest state and action to be performed
const countReducer = (state, action)=>{
 switch(action.type){
    case 'CHANGE_COUNT': 
          return {...state, count: action.payload}
    default:
          return state           
    
    }
}

//CountProvider just wrappers the application, we dont pass this
export function CountProvider ({children}){

     //now we will use useReducer to mutate the state
     //state-> initial state which we specified which also gets updated state and we pass this across to other component
     //dispatch -> dispatch func is used to dispatch the state change to countReducer function we just created
     const [state, dispatch] = useReducer(countReducer, {count:0})  //useReducer(anyfunction, initialState)
     

     const fetchCount =async () =>{
        const res = await axios.get('/cart/cartCount')
        console.log("COUNT",res.data.count)
        //here when we call dispatch function it tells useReducer to  trigger countReducer and state mutation takes place within countReducer, which is then captured by state in useReducer i.e const[state, ...
        dispatch({type: 'CHANGE_COUNT', payload:res.data.count})
    }
    
    useEffect(()=>{
        fetchCount()
    },[])

    
     //below function is used to handle the dispatch
     //when we use below dispatch function, react looks at reducer function associated with dispatch(i.e countReducer), and fires it to run the logic within it(i.e count change in our case)
     //if you want to pass data, from other component you can use changeCount = (count) =>
     const changeCount = async ()=>{ 
        fetchCount()
     }

    return(
        //we spread ...state so that updated object {color: XXX} is passed, changeCount to update our count
        <CountContext.Provider value={{...state, changeCount}}>
            {children}
        </CountContext.Provider>
    )
}