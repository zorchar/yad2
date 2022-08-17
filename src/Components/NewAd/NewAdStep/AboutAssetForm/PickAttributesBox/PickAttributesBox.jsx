import React from 'react'
import ToggleAttributeButton from './ToggleAttributeButton/ToggleAttributeButton'

export default function PickAttributesBox() {
    return (
        <>
            <h3>
                מאפייני הנכס
            </h3>

            <div className='pick-attribute-box'>
                <ToggleAttributeButton name={'hasAC'} text={'מיזוג'}>
                    <i className="fa-solid fa-snowflake"></i>
                </ToggleAttributeButton>
                <ToggleAttributeButton name={'hasMamad'} text={'ממ"ד'} />
                <ToggleAttributeButton name={'hasWarehouse'} text={'מחסן'} />
                <ToggleAttributeButton name={'hasFurniture'} text={'ריהוט'} />
                <ToggleAttributeButton name={'hasDisabilityAccess'} text={'גישה לנכים'} />
                <ToggleAttributeButton name={'hasElevator'} text={'מעלית'} />
                <ToggleAttributeButton name={'hasTadiran'} text={'מזגן תדיראן'} />
                <ToggleAttributeButton name={'isRenovated'} text={'משופצת'} />
                <ToggleAttributeButton name={'hasKosherKitchen'} text={'מטבח כשר'} />
                <ToggleAttributeButton name={'hasSunHeatedWaterTank'} text={'דוד שמש'} />
                <ToggleAttributeButton name={'hasBars'} text={'סורגים'} />
            </div>
        </>
    )
}
