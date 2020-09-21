import React from 'react'
import { useSelector } from 'react-redux'
import RemoveTodo from './RemoveTodo'
export default function Todos() {



    const store = useSelector(state => state)
    const isEmpty = store.every(todo=> todo.todo === "" )

    return (
        isEmpty ? null :

        <ul>
                {store.map(todo => (
                    todo.todo === "" ? null :
                        <span key={todo.id} id={todo.id}>
                            <li >{todo.todo}</li>
                            <RemoveTodo/>
                        </span>
            ))}
       </ul>
    )
}