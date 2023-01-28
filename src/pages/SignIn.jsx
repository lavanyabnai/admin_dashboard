import React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Link } from 'react-router-dom';
import { Button } from '@progress/kendo-react-buttons';


export const SignIn = () => {
  const [paswordType, setPasswordType] = React.useState('password')

  const handleClick = () => {
    if (paswordType === 'password') {
      setPasswordType('text')
    } else if (paswordType === 'text') {
      setPasswordType('password')
    }
  }
   return (
      <div className="App ">
        <div className="sign-in-page">
           <div className="sign-in-wrapper">
            
               <div className="logo-wrapper">
     
         <div className="logo">
         <img src={require('../assets/logo/Original on Transparent.png')} alt={'logo'} />
         </div>
         <div className='banner'>
             Sign In
         </div>
         <div className="account">
             Don't have an account? <Link to="/signup">Sign up</Link>
         </div>
     </div>
     <div className="inputs-wrapper ">
     <Form  render={formRenderProps => <FormElement style={{
maxWidth: 650
}}>
     <fieldset className={'k-form-fieldset'}>         
       <div className="mb-3">
         <Field name={"email"} type={"email"} component={Input} label={"Email"} />
       </div>
       <div className="mb-3" style={{display: 'flex'}}>
         <Field name={"password"} type={paswordType} component={Input} label={"Password"} />
         <span className="k-icon k-i-preview password-icon" onClick={handleClick}></span>
       </div>
     </fieldset>
     <fieldset className={'k-form-fieldset'}>         

     <div className="mb-3">
     <Checkbox label={'Remember Me'} />
       </div>
       </fieldset>

     <div className="k-form-buttons">
       <Link to="/home/dashboard" className="dashboard-button" style={{ textDecoration: 'none' }}>
       <Button type={'submit'} className="sign-button">
         Sign In
        </Button>
        </Link>
     </div>
   </FormElement>} />
         
     </div>
     <div className="continue-with-wrapper">
         <hr /> <span>Or continue with</span><hr/>
     </div>
     <div className="social-wrapper">
         <a href="/#" className='facebook'>
             <img src={require('../assets/facebook.png')} alt={'facebook icon'}></img>
         </a>
         <a href="/#" className='twitter'>
             <img src={require('../assets/twitter.png')} alt={'twitter icon'}></img>
         </a>
         <a href="/#" className='reddit'>
             <img src={require('../assets/reddit.png')} alt={'reddit icon'}></img>
         </a>
     </div>
 </div>
 </div>
</div>


 
   )
}