import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputSettlement({ isInvalidityShown }) {
    return (
        <LabelAndTextInput
            isInvalidityShown={isInvalidityShown}
            name={'settlement'}
            label='ישוב*'
        />
    )
}
