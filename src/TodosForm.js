

import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';



export default function TodosForm(){


    //  * initiate state
    const initialState = { todo: "", id: uuid() }
    const [formData, setFormData] = useState(initialState )

    //  *data change
    function changeData(e) {
        e.persist()
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }

    //  * onSubmitting the form, I want to dispatch
    //  * extract dispatch function
    const dispatch = useDispatch()
    function submitForm(e) {
        e.preventDefault()
        if (formData.todo === "") {
            setFormData(initialState)
            return
        }
        //  * add an id to the todo
        dispatch({ type: "ADD_TODO", payload: formData })
        setFormData(initialState)
    }

    return (

        <>
        <div>
            <form
                onSubmit={submitForm}
            >
                <div className="label-input">
                    <label htmlFor="todo">Todo:</label>
                        <input name="todo" type="text"  value={formData.todo}
                            onChange={changeData}
                    ></input>
                </div>


                <button>Add Meme!</button>

            </form>
            </div>
            </>
    )
}