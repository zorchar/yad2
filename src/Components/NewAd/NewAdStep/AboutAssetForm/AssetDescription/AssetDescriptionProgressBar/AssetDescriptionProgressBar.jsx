import React from 'react'

export default function AssetDescriptionProgressBar({ comment = 'null', width = '20%' }) {
    return (
        <div id='asset-description-progress-bar'>
            <div id='percentage' style={{ width }}></div>
            <div id='progress-bar-text'> {comment}</div>
        </div>
    )
}
