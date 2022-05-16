import './appdesign.css'
import adp from '../imagenes/adpImg.png'
import adobe from '../imagenes/adobe.png'
import vmware from '../imagenes/vmware.png'
import fujitsu from '../imagenes/fujitsu.png'
import nasdaq from '../imagenes/nasdaq.png'

export default function CptBody(){
    return(
    <div className='bground'>
        <div className='genericBlock1'>
            <div className='divTexto'>
                <div>
                    <h1 className='h1Text'>
                        <b>Build better</b>
                        <div className='word'>
                        <span>skills</span>
                        <span>processes</span>
                        <span>workflows</span>
                        <span>ideas</span>
                        <span>teams</span>
                    </div>
                    </h1>
                </div>
                <p className='p1Text'>Face the future with confidence—and with the skills and tools to thrive</p>
                <nav>
                    <ul className='nav_links'>
                        <li className='lihead'><button className='button button2'><b>VIEW PLANS</b></button></li>
                        <li className='lihead'><button className='button button1'><b>TRY FOR FREE</b></button></li>
                    </ul>
                </nav>
                <div className='spaceBtwn'/>
                <h6 className='h6Bod'><b>HELPING THOUSANDS OF ORGANIZATIONS BUILD TECH SKILLS AT SCALE</b></h6>
                <div className='divimg'>
                <ul className='nav_links3'>
                    <li className='lihead'><img src={adp}></img></li>
                    <li className='lihead'><img src={adobe} alt='adobe logo'></img></li>
                    <li className='lihead'><img src={vmware}></img></li>
                    <li className='lihead'><img src={fujitsu}></img></li>
                    <li className='lihead'><img src={nasdaq}></img></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    );
}