import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const QuotesForm=(props)=>{
    const {formSubmission,id:slNo,name:author,body:quote,handleToggle}=props
    const [name,setName]=useState(author?author:'')
    const [body,setBody]=useState(quote?quote:'')
    const [id,setId]=useState(slNo?slNo:uuidv4())
    const handleChange=(e)=>{
        const res=e.target.value
        e.target.name==='name'?setName(res):setBody(res)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name,body
        }
        formSubmission(formData)
        if(handleToggle){
            handleToggle()
        }
        setName('')
        setBody('')
    }
    return (
        <div>
            
           {  <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' name='name' value={name} onChange={handleChange}/><br/><br/>

                <label>Quote</label><br />
                <textarea name='quote' value={body} onChange={handleChange}></textarea><br/><br/>

                <input type='submit' value='save' />
            </form> }
        </div>
    )
}

export default QuotesForm