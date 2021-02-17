import React, { useState } from 'react'


// pass in the getQuery PROP here
function SearchBar({ getQuery }) {
  //  use the useState. the value is text, and you use the setText to the onChange below
  const [text, setText] = useState('')

  const onChange = (q) => {
    // this sets the text to take in the query
    setText(q)
    // calls the getQuery
    getQuery(q)
  }

  return ( 
    <>
    <div>
    {/* this makes the search bar input */}
      <input
      type='text'
      placeholder= 'Find Your Pokemon...'
        // the value and onChange event with e.targe.value
      value= {text}
      onChange= {(e) => onChange(e.target.value)} 
       // React will internally call focus() when the input element mounts. when you use autoFocus attribute.
       autoFocus
       /> 
    </div>
  </>
  )
}

export default SearchBar
  
