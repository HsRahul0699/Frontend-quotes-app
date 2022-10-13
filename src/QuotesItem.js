import React,{useState} from 'react'
import EditQuote from './EditQuote'

const QuotesItem=(props)=>{
    const {id,name,body,removeItem,editItem}=props
    const [toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return (
        <div>
            {toggle?(
            <div>
                <EditQuote id={id}
                           name={name}
                           body={body}  
                           editItem={editItem}
                           handleToggle={handleToggle} />
                <button onClick={handleToggle}>Cancel</button>
            </div>):(
            <div>
                    <blockquote>{body} -- {name}</blockquote>
                    <button onClick={handleToggle}>Edit</button>
                    <button onClick={()=>{
                        const confirmRemove=window.confirm('Are you sure you want to delete?')
                        if(confirmRemove){
                        removeItem(id)
                        }
                    }}>Remove</button>
            </div>)}
    
        </div>
    )
}

export default QuotesItem