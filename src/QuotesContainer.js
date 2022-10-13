import React,{useState,useEffect} from 'react'
import QuoteList from './QuotesList'
import QuotesForm from './QuotesForm'
import AddQuote from './AddQuote'
const QuotesContainer=(props)=>{
    const [quotes,setQuotes]=useState([])

    const addItem=(q)=>{
        
        setQuotes([q,...quotes])
    }
    const removeItem=(id)=>{
        const res= quotes.filter(q=>{
            return q.id!==id
        })
        setQuotes(res)
    }
    
    useEffect(()=>{
        const res=JSON.parse(localStorage.getItem('quotes'))||[]
        setQuotes(res)
    },[])
    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])
    
    const editItem=(quote)=>{
        const res=quotes.map(q=>{
            if(q.id===quote.id){
                return {...q,...quote}
            }
            else{
                return {...q}
            }
        })
        setQuotes(res)
    }
    return (
        <div>
            
             <QuoteList quotes={quotes} removeItem={removeItem} editItem={editItem} />
            {/*<QuotesForm addQuote={addItem}/> */} 
             <AddQuote addItem={addItem} />
        </div>
    )
}

export default QuotesContainer