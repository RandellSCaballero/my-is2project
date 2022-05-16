import './appdesign.css'
import Js from '../imagenes/js.png'
import angular from '../imagenes/angular.png'
import python from '../imagenes/python.png'
import csharp from '../imagenes/csharp.png'

export default function CptBody2(){
    return(
        <div className='bground2'>
            <div className='container bground2Cont'>
                    <nav>
                    <ul className='nav_links4'>
                    <li className='lihead2'>
                        <div className='bground2ContLeft'>
                            <nav>
                                <ul className='nav_links5'>
                                    <li className='lihead2'>            
                                        <div className='bground2item'>
                                            <a className='bground2ContLefta'><b>PATH</b>
                                            <img src={Js} className='bground2itemicon' alt='JavaScript Logo'>
                                            </img>
                                            <div className='bground2ContLeftdiv1'>
                                                JavaScript
                                            </div>
                                            <div className='bground2ContLeftdiv2'>
                                                11 Courses
                                            </div>
                                            <div className='bground3BoxText2Section'>
                                                <a className='aBoxTextSection'><b>Take a look</b> </a>
                                                <div className='simple-arrow'></div>
                                            </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='lihead2'>            
                                        <div className='bground2item'>
                                            <a className='bground2ContLefta'><b>PATH</b>
                                            <img src={angular} className='bground2itemicon' alt='JavaScript Logo'>
                                            </img>
                                            <div className='bground2ContLeftdiv1'>
                                                Angular
                                            </div>
                                            <div className='bground2ContLeftdiv2'>
                                                14 Courses
                                            </div>
                                            <div className='bground3BoxText2Section'>
                                                <a className='aBoxTextSection'><b>Take a look</b> </a>
                                                <div className='simple-arrow'></div>
                                            </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='lihead2'>            
                                        <div className='bground2item'>
                                            <a className='bground2ContLefta'><b>PATH</b>
                                            <img src={python} className='bground2itemicon' alt='JavaScript Logo'>
                                            </img>
                                            <div className='bground2ContLeftdiv1'>
                                                Core Python
                                            </div>
                                            <div className='bground2ContLeftdiv2'>
                                                12 Courses
                                            </div>
                                            <div className='bground3BoxText2Section'>
                                                <a className='aBoxTextSection'><b>Take a look</b> </a>
                                                <div className='simple-arrow'></div>
                                            </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className='lihead2'>            
                                        <div className='bground2item'>
                                            <a className='bground2ContLefta'><b>PATH</b>
                                            <img src={csharp} className='bground2itemicon' alt='JavaScript Logo'>
                                            </img>
                                            <div className='bground2ContLeftdiv1'>
                                                C#
                                            </div>
                                            <div className='bground2ContLeftdiv2'>
                                                19 Courses
                                            </div>
                                            <div className='bground3BoxText2Section'>
                                                <a className='aBoxTextSection'><b>Take a look</b> </a>
                                                <div className='simple-arrow'></div>
                                            </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        </li> 
                        <li className='lihead2'>
                        <div className='bground2ContRight'>
                            <div className='bground2ContRightdiv1'>
                                <b>TRENDING TECHNOLOGIES</b>
                            </div>
                            <div className='bground2ContRightdiv2'>
                                <b>Popular topics <br/> to learn now</b>
                            </div>
                            <p className='bground2ContRightp'>
                                Not sure what technologies to focus on? The Technology Index ranks 850+ technologies by their relative popularity. See what's topping the charts and get recommended courses to skill up.&nbsp;
                            </p>
                            <div className='bground2BoxText2Section'>
                                    <a className='aBoxTextSection'><b>View the index</b> </a>
                                    <div className='simple-arrow'></div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </nav>
            </div>
        </div>
    )
}