import './signin.css'
import pslogo from '../imagenes/login-logo.png'
import banner from '../imagenes/login-h1.png'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return(
        <div className='SignInContainer'>
            <div className='LeftColumn'>
                <div className='LeftColumnWrapper'>
                    <div className='spacerRC'></div>
                    <Link to='/' className='logoPluralS'>
                        <img src={pslogo} alt='PluralSight Logo'/>
                    </Link>
                    <div className='signInForm'>
                        <div className='UsernameDiv'>
                            <label>Email or Username</label>
                            <input type='text' className='UsernameTextInput'></input>
                        </div>
                        <div className='PasswordDiv'>
                            <label>Password</label>
                            <input type='password' className='UsernameTextInput'></input>
                        </div>
                        <button className='SignInButton'>Sign in</button>
                    </div>
                    <div className='divLinks'>
                        <a className=''>
                            Forgot password?
                        </a>
                        <a className=''>
                            Sign in with company or school
                        </a>
                        <hr/>
                    </div>
                    <div className='CreateAccountBtnWrap'>
                        <button className='CreateAccountButton'>Create an account</button>
                    </div>
                </div>
            </div>
            <div className='RightColumn'>
                <div className='RightColumnWrap'>
                    <div className='RightColumnInnerWrap'>
                        <img src={banner} alt="banner"/>
                    </div>
                </div>
            </div>
        </div>
    )
}