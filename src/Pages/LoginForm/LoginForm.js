import React from 'react';
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='login-page'>
        <div className="login-page-form-cover">
            <form className="login-page-form">
                <div>
                    <input type="tel" placeholder="Phone Number" />
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">Log in</button>
            </form>
            <p className="fg-password"><a>Forgotten password?</a></p>

            <p className="text-optional margin-bottom">Sign in with</p>
            <div className="sign-in-option">
                <button className="fb"><i class="fa-brands fa-facebook"></i>Facebook</button>
                <button className="gg"><i class="fa-brands fa-google"></i>Google</button>
            </div>

            <p className="text-optional">Don't have an account?</p>
            <button className="btn-sign-up">Sign up</button>
        </div>
    </div>
  )
}

export default LoginForm;