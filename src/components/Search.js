import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({setFilterText}) => {
  return (
    <div className = 'search'>
        <MdSearch size= '1.3em'/>
        <input
        onChange={(e)=>setFilterText(e.target.value)} 
        type = 'text' 
        placeholder='type to search...'
        />
    </div>
  )
}

export default Search