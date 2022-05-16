import './appdesign.css'
import skills from '../imagenes/Skill_logo_white.png'
import Flow from '../imagenes/Flow_Logo_white.png'

export default function DropDownProd() {
    return(
        <div className='dropDown2'>
            <div className='closeBtn'><b>X</b></div>
            <div className='dropDown2Wrap'>
                <div className='dropDown2WrapInnerLSection'>    
                    <div className='dropDown2WrapInnerL'>
                        <div className='dropDownProductLink'>
                            <a className='dropDownProductLinka'>
                                <img className='imgskill' src={skills} alt='Skills Logo'/>
                                <p className='dropDownProdP'>Build tech skills to drive results</p>
                            </a>
                        </div>
                        <hr className='hrProduct'/>
                        <ul className='dropDownProductLinkUl'>
                            <li className='dropDownProductLinkLi'><a><b>What is Skills?</b></a></li>
                            <li className='dropDownProductLinkLi'><a><b>View plans</b></a></li>
                        </ul>
                    </div>
                </div>
                <div className='dropDown2WrapInnerR'>
                <div className='dropDownProductLink'>
                            <a className='dropDownProductLinka'>
                                <img className='imgskill' src={Flow} alt='Skills Logo'/>
                                <p className='dropDownProdP'>Get insights into your workflow</p>
                            </a>
                        </div>
                        <hr className='hrProduct'/>
                        <ul className='dropDownProductLinkUl'>
                            <li className='dropDownProductLinkLi'><a><b>What is Flow?</b></a></li>
                            <li className='dropDownProductLinkLi'><a><b>View plans</b></a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}