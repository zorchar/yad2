import React from 'react'

export default function SearchBlockInputAndLabel({ id, label, placeholder }) {
    return (
        <div className='search-block__input-and-label'>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} placeholder={placeholder} />
        </div>
    )
}
