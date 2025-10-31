import React from 'react'

const Search = () => {
  return (
    <div className="w-full min-h-12 flex" >
      <input
        className="w-full ml-10 placeholder: italic"
        placeholder='Search for a movie, tv show, person...'
      />
    </div>
  )
}

export default Search