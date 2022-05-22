import React from 'react'
import '../../Styles/LandingPage/LandingPage_Validate/FormInput.css'

function FormInput(props) {
    const [focused, setFocused] = React.useState(false);
    const {label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (event) => {
        setFocused(true);
    };

  return (
    <div className='formInput'>
        <label > {label} </label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}  />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput