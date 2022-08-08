import React from 'react'

export default function Icon({ src, alt }) {
    return (
        <div className='icon-wrapper'>
            <img src={src} alt={alt} />
        </div>
    )
}
