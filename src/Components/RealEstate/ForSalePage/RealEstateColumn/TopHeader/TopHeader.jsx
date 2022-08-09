import React from 'react'
import { Link } from 'react-router-dom'
import AccessibilityButton from './AccessibilityButton/AccessibilityButton'

export default function TopHeader() {
    return (
        <div className='top-header'>
            <div className='side-wrapper'>
                <Link to={'/'}>ראשי</Link>
                <span> / נדל"ן למכירה</span>
            </div>
            <div className='side-wrapper'>
                <AccessibilityButton />
            </div>
        </div>
    )
}
