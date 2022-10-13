import React from 'react'
import QuotesItem from './QuotesItem'

const QuoteList=(props)=>{
    const {quotes,removeItem,editItem}=props
    return (
        <div>
            {quotes.length===0?
                (<div>
                    <h1>No quotes found</h1>
                    <p>Add your first quote</p>
                 </div>)
                 :
                (<React.Fragment>
                    <h1>My Quotes - {quotes.length}</h1>
                    {quotes.map(quote=>{
                        return <QuotesItem key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/>
                    })}
                </React.Fragment> )}
            
        </div>
    )
}
export default QuoteList