const reducer = (state, action)=>{
    switch (action.type) {

        case "SET_LOADING":
        return{
            ...state,
            isLoading: true,
        };
        case "GET_STORIES":
            return{
                ...state,
                isLoading:false,
                hits: action.payLoad.hits,
                nbPages: action.payLoad.nbPages,
            }
            case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter((currElem)=>
                    currElem.objectID !== action.payLoad
                    ),
            }
            case "SEARCH_QUERY":
                return{
                    ...state,
                    query: action.payLoad
                }
            case "NEXT_PAGE":
                let PageNum = state.page+1
                if (PageNum >= state.nbPages) {
                    PageNum = 0;
                }
                return{
                    ...state,
                    page: PageNum,
                }
            case "PREVIOUS_PAGE":
                let pageNum = state.page -1;

                if (pageNum <= 0) {
                    pageNum = 0;
                }
                return{
                    ...state,
                    page: pageNum,
                }
    }
    return state;

}

export default reducer;