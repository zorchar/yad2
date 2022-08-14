import React from 'react'

export default function NewAdStepTopRow({ stepNumber, stepHeadline }) {
    return (
        <div className='new-ad-step__top-row'>
            <div className='step-number'>{stepNumber}</div>
            <div className='step-headline'>{stepHeadline}</div>
        </div>
    )
}
