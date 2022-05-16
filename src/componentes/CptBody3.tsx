import './appdesign.css'
import sandboxes from '../imagenes/sandboxes.png'
import certification from '../imagenes/certification-prep.png'
import delivery from '../imagenes/delivery-module.png'
import MostrarContenidoDinamico from './MostrarContenidoDinamico';

export default function CptBody2(){
    const certificationLogo = <img src={certification}/>;
    const deliveryLogo = <img src={delivery}/>;
    const sandboxLogo = <img src={sandboxes}/>;

    const bloques=[
        {imagen:certificationLogo,
        titulo:'Empower your teams to grow their skills and their careers',
        texto:'Prepare your team for certification exams with our expert authored content and practice exams.',
        link:'Learn more',oculto:false},
        
        {imagen:deliveryLogo,
        titulo:'Make lasting workflow improvements with insights from your Jira data',
        texto:'Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. Flows delivery module helps you better understand how your team is working and can make lasting improvements to your workflow.',
        link:'Learn more',oculto:false},
        
        {imagen: sandboxLogo,
        titulo:'Utilize a space for unrestricted exploration',
        texto:'Sandboxes gives your team a safe environment to practice what they are learning from expert-authored courses.',
        link:'Learn more',oculto:false}
    ]

    return(
        <div className='bground3'>
            <div className='bground3Cont'>
                <div className='bground3titlediv1'>
                    <b>SEE WHAT'S NEW</b>
                </div>
                <div className='bground3titlediv2'>
                    <h3><b>Our latest features</b></h3>
                </div>
                <div className='bground3Box'>
                    <div className='bground3BoxElement1'>
                        <div className='bgroundBoxImageSection'>
                            <div className='logo-skillsimg'></div>
                            <h6 className='bgroundBoxImageSectionH6'><b>LABS</b></h6>
                        </div>
                        <div className='bgroundBoxTitle2Section'>
                            <h3 className='h3Title2'>Deepen your people's expertise with hands-on labs</h3>
                        </div>
                        <div className='bground3BoxTextSection'>
                            <p className='pBoxTextSection'>Improve your teams' confidence in their ability to deliver on business objectives by building the right skills that meet your org’s needs. Pluralsight offers 950+ labs that enable hands-on practice in secure environments across domains such as cloud (AWS, GCP and Azure), IT Ops, security, data and software development.</p>
                        </div>
                        <div className='spacerSection'/>
                        <div className='bground3BoxText2Section'>
                            <a className='aBoxTextSection'><b>Learn more</b> </a>
                            <div className='simple-arrow'></div>
                        </div>
                    </div>
                    <div className='bground3BoxElement2'>
                    </div>
                </div>
                <div className='bgroundContBlock2'>
                    {bloques.map(
                    (oculto) => {
                    return <MostrarContenidoDinamico {...oculto}/>
                    }
                    )
                    }
                </div>
            </div>
        </div>
    )
}