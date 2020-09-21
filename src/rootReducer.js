



//  * set initial state
const initialState = [{id:0, todo:""}]
export default function TodosReducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_TODO":
            console.log([...state, action.payload])
            return [...state, action.payload]
        case "DELETE_TODO":
            return state.filter(item => item.id !== action.payload)


        default:
            return state
    }
}