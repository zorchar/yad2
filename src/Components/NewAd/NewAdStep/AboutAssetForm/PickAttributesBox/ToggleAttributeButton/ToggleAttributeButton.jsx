import React, { useContext } from 'react'
import { toggleInput } from '../../../../../../actions/newAdActions'
import { NewAdContext } from '../../../../../../context/NewAdContext'
import Icon from '../../../../../NavBar/IconedNavLink/Icon/Icon'

export default function ToggleAttributeButton({ src, alt, text, children, name }) {

    const { newAdState, newAdDispatch } = useContext(NewAdContext)

    const handleClick = (e) => {
        e.target.className.includes('active') ?
            e.target.className = 'toggle-attribute-button' :
            e.target.className = 'toggle-attribute-button active'

        newAdDispatch(toggleInput(name))
    }

    return (
        <div className={'toggle-attribute-button ' + (newAdState[name] && 'active')} onClick={handleClick}>
            {src && <Icon src={src} alt={alt} />}
            {children}
            {text}
        </div>
    )
}
