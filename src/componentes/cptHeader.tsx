import './appdesign.css'
import PSlogo from '../imagenes/PSlogol.png';
import lupa from '../imagenes/lupa.png'
import { useState } from 'react';
import DropDownPlat from './DropDownPlat';
import DropDownProd from './DropDownProd';
import DropDownRes from './DropDownRes';
import DropDownSearch from './DropDownSearch';
import DropDownSignIn from './DropDownSignIn';
import simplearrowup from '../imagenes/simplearrowup.png'


export default function CptHeader (){
    const [isactive,SetIsActive] = useState(false);
    const HandleActive = () => {
    SetIsActive(!isactive)
    SetIsActive1(false)
    SetIsActiveRes(false)
    SetIsActiveSearch(false)
    SetIsActiveSign(false)
    };

    const [isactive1,SetIsActive1] = useState(false);
    const HandleActive1 = () => {
      SetIsActive(false)
      SetIsActive1(!isactive1)
      SetIsActiveRes(false)
      SetIsActiveSearch(false)
      SetIsActiveSign(false)
      };
    
    const [isactiveres,SetIsActiveRes] = useState(false);
    const HandleActiveRes = () => {
      SetIsActive(false)
      SetIsActive1(false)
      SetIsActiveRes(!isactiveres)
      SetIsActiveSearch(false)
      SetIsActiveSign(false)
      };

    const [isactivesearch,SetIsActiveSearch] = useState(false);
    const HandleActiveSearch = () => {
      SetIsActive(false)
      SetIsActive1(false)
      SetIsActiveRes(false)
      SetIsActiveSearch(!isactivesearch)
      SetIsActiveSign(false)
      };

    const [isactivesign,SetIsActiveSign] = useState(false);
    const HandleActiveSign = () => {
      SetIsActive(false)
      SetIsActive1(false)
      SetIsActiveRes(false)
      SetIsActiveSearch(false)
      SetIsActiveSign(!isactivesign)
      };

    return(
    <header className='headersup'>
      <img src={PSlogo} className='logoPS' alt='PSlogo'/>
      <nav>
        <ul className='nav_links'>
          <li className='lihead' id='platform' onClick={HandleActive}>Platform
            <span className='simple-arrow-down'>
              <img className='arrowup' alt='arrow' src={simplearrowup}/>
            </span>
            <div className={`dropDown1 ${isactive ? 'active' : 'inactive'}`}>
              <DropDownPlat/>
            </div> 
          </li>

          <li className='lihead' id='products' onClick={HandleActive1}>Products
            <span className='simple-arrow-down'>
              <img className='arrowup' alt='arrow' src={simplearrowup}/>
            </span>
          <div className={`dropDown2 ${isactive1 ? 'active' : 'inactive'}`}>
              <DropDownProd/>
            </div></li>

          <li className='lihead' id='resources' onClick={HandleActiveRes}>Resources
            <span className='simple-arrow-down'>
              <img className='arrowup' alt='arrow' src={simplearrowup}/>
            </span>
          <div className={`dropDownRes ${isactiveres ? 'active' : 'inactive'}`}>
              <DropDownRes/>
            </div></li>

          <li className='lihead'>For Individuals</li>
        </ul>
      </nav>
      <nav className='nav_links2'>
        <ul>
          <li className='lihead' id='lupa' onClick={HandleActiveSearch}>
            <img className='lupa' alt='Lupaimg' src={lupa}>
            </img>
              <div className={`dropDownSearch ${isactivesearch ? 'active' : 'inactive'}`}>
                <DropDownSearch/>
              </div>
          </li>
          <li className='lihead' id='signin' onClick={HandleActiveSign}>Sign in
            <span className='simple-arrow-down'>
              <img className='arrowup' alt='arrow' src={simplearrowup}/>
            </span>
            <div className={`dropDownSignIn ${isactivesign ? 'active' : 'inactive'}`}>
              <DropDownSignIn/>
            </div>
          </li>
          <li className='lihead'><button className='button buttonHead'><b>TRY FOR FREE</b></button></li>
        </ul>
      </nav>
    </header>
    );
}