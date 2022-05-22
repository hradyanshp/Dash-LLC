import React from 'react'
import FormInput from './FormInput.js'

function LandingPage_Validate(props) {

    const [values, setValues] = React.useState({
        Username:  "",
        Email:  "",
        Password:  "",
        ConfirmPassword:  "",
        PhoneNumber:  "",
    })

    const inputs = [
        {
            id: 1,
            name: "Username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should not include special characters and must be 3-15 characters long",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,15}$",
            required: true
        },
        {
            id: 2,
            name: "Email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Not a valid address",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "Password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Passsword should be 8-20 characters and include - 1 letter, 1 number, 1 special character!",
            // eslint-disable-next-line
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
            required: true
        },
        {
            id: 4,
            name: "ConfirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            errorMessage: "Check again ! Not matching !! ",
            label: "ConfirmPassword",
            pattern: values.Password,
            required: true
        },
        {
            id: 5,
            name: "PhoneNumber",
            type: "number",
            placeholder: "PhoneNumber",
            errorMessage: "Not a valid number (10 digit long)",
            label: "PhoneNumber",
            // eslint-disable-next-line
            pattern: "^[0-9]{10}$",
            required: true
        }
    ]

    

    const handleSubmit = (event) => {
        event.preventDefault();

        //formdata
        const formData = new FormData(event.target)
        console.log(Object.fromEntries(formData.entries()));

        props.handleValidation();

    }


    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
        }
    

    console.log(values);

  return (
    <div className='LandingPage_Validate-form'>
        <form onSubmit={handleSubmit}> 
            <h1>Register</h1>
            {inputs.map( (input) => ( 
                <FormInput key={input.id} {...input} values={values[input.name]} onChange={onChange} />
            ) 
            )}
            
            <button>Submit</button>

        </form>
    </div>
  )
}

export default LandingPage_Validate
