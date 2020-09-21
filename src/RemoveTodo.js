import React from 'react'
import { useDispatch} from 'react-redux'

export default function RemoveTodos(id) {

    const dispatch = useDispatch()
    return (
        <button
            onClick={(e) =>
                dispatch({type:"DELETE_TODO", payload:e.target.parentElement.id })
            }

        >Remove</button>

    )
}