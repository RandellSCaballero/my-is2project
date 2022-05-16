import './appdesign.css'
import skills from '../imagenes/Skill_logo_white.png'
import Flow from '../imagenes/Flow_Logo_white.png'
import { Link } from 'react-router-dom'

export default function DropDownSignIn() {
    return(
        <div className='dropDownSignIn'>
            <div className='closeBtn'><b>X</b></div>
            <div className='dropDownSignInWrap'>
                <div className='dropDownSignInWrapLOuter'>
                    <div className='dropDownSignInWrapLInner'>
                        <Link to='/signin' className='dropDownSignInLA'>
                            <div className='nav-header--label'>
                                <b>SIGN IN WITH</b>
                            </div>
                            <div className='dropDownSignInimageWrap'>
                                <img className='imgskills' src={skills} alt='Skills logo'/>
                                <div className='simple-arrow2'></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='dropDownSignInWrapROuter'>
                    <div className='dropDownSignInWrapRInner'>
                        <a className='dropDownSignInLA'>
                            <div className='nav-header--label'>
                                <b>SIGN IN WITH</b>
                            </div>
                            <div className='dropDownSignInimageWrap'>
                                <img className='imgskills' src={Flow} alt='Skills logo'/>
                                <div className='simple-arrow2'></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}