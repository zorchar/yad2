import ToggleAttributeButton from './ToggleAttributeButton/ToggleAttributeButton'

export default function PickAttributesBox({ shouldInputShow }) {
    return (
        <>
            <h3>
                מאפייני הנכס
            </h3>

            <div className='pick-attribute-box'>
                {shouldInputShow() &&
                    <ToggleAttributeButton name={'hasAC'} text={'מיזוג'}>
                        <i className="fa-solid fa-snowflake"></i>
                    </ToggleAttributeButton>
                }
                {shouldInputShow() && <ToggleAttributeButton name={'hasMamad'} text={'ממ"ד'} />}
                <ToggleAttributeButton name={'hasWarehouse'} text={'מחסן'} />
                {shouldInputShow() && <ToggleAttributeButton name={'hasFurniture'} text={'ריהוט'} />}
                <ToggleAttributeButton name={'hasDisabilityAccess'} text={'גישה לנכים'} />
                {shouldInputShow() && <ToggleAttributeButton name={'hasElevator'} text={'מעלית'} />}
                {shouldInputShow() && <ToggleAttributeButton name={'hasTadiran'} text={'מזגן תדיראן'} />}
                {shouldInputShow() && <ToggleAttributeButton name={'isRenovated'} text={'משופצת'} />}
                {shouldInputShow() && <ToggleAttributeButton name={'hasKosherKitchen'} text={'מטבח כשר'} />}
                {shouldInputShow() && <ToggleAttributeButton name={'hasSunHeatedWaterTank'} text={'דוד שמש'} />}
                {shouldInputShow() && <ToggleAttributeButton name={'hasBars'} text={'סורגים'} />}
            </div>
        </>
    )
}
