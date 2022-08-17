import React from 'react'

export default function FileUploadBox({ children }) {
    return (
        <div className='file-upload' >
            {children}
            <input type="file" />
        </div>
    )
}
