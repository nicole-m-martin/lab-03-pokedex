// to use Hooks import them in {}
import React, { useState, useEffect } from 'react'
import PokeList from './PokeList.js'
// axios is a way to get data from api's
// npm i axios to install
import axios from 'axios'
import SearchBar from './SearchBar'


// rafce makes a new arrow function start
const SearchPage = () => {
   // set the state with useState hook, with empty array
   const [pokemons, setPoke] = useState([])
  //  set the loading spinner with useState true
   const [isLoading, setIsLoading] = useState(true)
   // this is using the state from the query 
   const [query, setQuery] = useState('')

   // useEffect hook will fire off events
  useEffect(() => {
    // async is always used with await
    const fetchPokemon = async () => {
      setIsLoading(true)
      // this is where you grab the api
      // the ${query} represents whatever the user types
      const data = await axios.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${query}`)


       // set the data.results with setItems
       setPoke(data.results)
       // set the isLoading to false because its done loading
       setIsLoading(false)
     }
     // call the fetchItems function
     fetchPokemon()
     // now we add the query state and is the dependency 
   }, [query])


  return (
     // add the JSX to render onto the SearchPage
    <div>
      {/* this adds the search input */}
      {/* and the arrow functions to access, and call a function setQuery */}
      <SearchBar getQuery={(q) => setQuery(q)} />
      {/* Below we are taking our global state and passing it in as a PROP */}
      {/* Pass in the PROPS isLoading and items to PokeList.js */}
       <PokeList isLoading={isLoading} pokemon={pokemons} />
    </div>
  )
}
export default SearchPage

      

