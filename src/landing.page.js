import React from "react";
import auth from "./auth";
import './Styles/LandingPage/landing.page.css'
import LandingPage_Logo from './Components/LandingPage_Logo/LandingPage_Logo.js'
import LandingPage_Validate from './Components/LandingPage_Validate/LandingPage_Validate.js'

export const LandingPage = (props) => {
  const [validated, setValidated] = React.useState(false);

  function handleValidation(event) {
    setValidated(!validated);
  }

  return (
    <div>
      {/* <h1 className="landingPage-heading">LANDING PAGE</h1> */}
      <div className="pageDimension">

      {/* eslint-disable-next-line */}
      <LandingPage_Logo />
      {/* eslint-disable-next-line */}
      <LandingPage_Validate handleValidation={handleValidation} />
      </div>
      
      {validated && (<button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
        >
        Login
      </button>)}
    </div>
  );
};
