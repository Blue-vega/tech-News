import React, { useContext, useReducer, useEffect } from "react";
// creating a context means WhareHouse
const AppContext = React.createContext();
// now creating a Provider means Dilivery Point
import reducer from "./Reducer";

const API = `http://hn.algolia.com/api/v1/search?`

const initialState = {
    isLoading: true,
    query: "CSS",
    nbPages: 0,
    page: 0,
    hits: [],


}


const AppProvider = ({children})=>{
    const[state, dispatch] = useReducer( reducer, initialState)
        // dispatch will trigger an action method inside the reducer

        const fetchData = async(url)=>{

            dispatch({type: "SET_LOADING"})

            try {
               const res = await fetch(url);
               const data = await res.json()
               console.log(data);
                dispatch({
                    type:"GET_STORIES",
                    payLoad:{
                        hits: data.hits,
                        nbPages: data.nbPages,

                    }
            })


            } catch (error) {
                console.log(error);
            }
        }

        // to remove the Post
        const removePost = (POST_ID)=>{
            dispatch({type: "REMOVE_POST", payLoad: POST_ID})
        }
        // search
        const searchPost = (searchQuery)=>{
            dispatch({type: "SEARCH_QUERY",
            payLoad: searchQuery
        })
        }
        //pagination
        const getPreviousPage=()=>{
            dispatch({type: "PREVIOUS_PAGE",
        })
        }
        const getNextPage=()=>{
            dispatch({type: "NEXT_PAGE",
        })
        }

        useEffect(()=>{
            fetchData(`${API}query=${state.query}&page=${state.page}`);
        },[state.query, state.page]);

    return(
        <AppContext.Provider value={{...state, removePost, searchPost, getPreviousPage, getNextPage}}>{children}</AppContext.Provider>
    )
}

// custom hook
const UseGlobalContext = ()=>{
    return useContext(AppContext);
}


export{AppContext, AppProvider, UseGlobalContext}