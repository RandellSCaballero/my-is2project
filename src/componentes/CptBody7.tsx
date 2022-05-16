import './appdesign.css'
import one from '../imagenes/one.png'

export default function CptBody7(){
    return(
        <div className='genericBlock7'>
            <div className='genericBlock7Wrap'>
                <div className='genericBlock7Margin'>
                    <div className='genericBlock7InnerWrap'>
                        <div className='genericBlock7ImgSection'>
                            <img className='genericBlock7Img' src={one}/>
                        </div>
                        <div className='genericBlock7TextSection'>
                            <h2 className='genericBlock7H2'><b>See our growth, <br/>progress and evolution</b></h2>
                        </div>
                        <div className='cpmtext2'>
                            <p className='cpmtext2P'>At Pluralsight, we see first-hand every day how technology makes the impossible, possible. It’s why Pluralsight One exists: To advance our mission of democratizing technology skills, challenging assumptions about solutions and create significant, lasting social impact.</p>
                        </div>
                        <div className='genericBlock7ButtonSection'>
                            <button className='genericBlock7Button'><b>FOR NONPROFITS</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}