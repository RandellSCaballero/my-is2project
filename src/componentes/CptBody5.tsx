import './appdesign.css'
import vmware2 from '../imagenes/vmware2.png'

export default function CptBody5(){
    return(
        <div className='genericBlock5'>
            <div className='genericBlock5Clm1'/>
            <div className='genericBlock5Clm2'>
                <div className='genericBlock5Clm2Wrapper'>
                    <div className='genericBlock5Clm2InnerWrap'>
                        <div className='genericBlock5Img'>
                            <img src={vmware2} alt="vmware logo" className='genericBlock5ImgStyle'/>
                        </div>
                        <div className='genericBlock5spacer'/>
                        <div className='genericBlock5Title'>
                            <h4 className='genericBlock5H4'><b>Winning the talent war with a scalable tech skills platform</b></h4>
                        </div>
                        <div className='cpmtext'>
                            <p className='genericBlock5P'>Evolving a 20-year-old company, increasing innovation and accelerating time to delivery requires fresh skills. See how VMware’s globally dispersed teams use Pluralsight to leverage the latest developments in technology as they find new ways to serve customers.</p>
                        </div>
                        <div className='genericBlock5Button'>
                            <button className='ButtonBlock5'><b>HOW THEY'RE SKILLING UP</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}