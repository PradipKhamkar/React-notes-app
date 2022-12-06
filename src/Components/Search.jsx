import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handelSearchNote }) => {

    return (
        <div className="search">
            <MdSearch className='search-icon' size='1.3em' />
            <input type="text"
                placeholder='type to search...'
                onChange={(e) => { handelSearchNote(e.target.value.toLowerCase()) }} />
        </div>
    )
}

export default Search