import './appdesign.css'
import MostrarContenidoDinamico2 from './MostrarContenidoDinamico2';
import skills from '../imagenes/skillsimg.jpg'
import celebration from '../imagenes/celebrationPS.png'
import flow from '../imagenes/flow-demo-thumbnail.png'
import free from '../imagenes/50free.png'

export default function CptBody(){
    const Skills = <img className='imgBlock4' src={skills}></img>
    const Celebration = <img className='imgBlock4' src={celebration}></img>
    const Flow = <img className='imgBlock4' src={flow}></img>
    const Free = <img className='imgBlock4' src={free}></img>

    const bloques = [
        {img:Skills,
        titulo:'WHAT IS PLURALSIGHT SKILLS?',
        texto:'Discover the fastest, most effective path to developing technology skills',
        oculto:false},

        {img:Celebration,
        titulo:'PLURALSIGHT NAMED A LEADER FOR IT TRAINING',
        texto:'We are honored to be recognized in the 2021 IDC MarketScape for IT training.',
        oculto:false},

        {img:Flow,
        titulo:'LEARN HOW TO DE-FRICTION YOUR SOFTWARE DEVELOPMENT WORKFLOW WITH FLOW',
        texto:'Take a guided tour through Pluralsight Flow to see how visibility can take your team to the next level',
        oculto:false},

        {img:Free,
        titulo:'CREATE YOUR FREE ACCOUNT',
        texto:'Build new tech skills on us with free access to 50+ expert-led courses, assessments and more.',
        oculto:false}
    ]

    return(
        <div className='genericBlock4'>
            <div className='genericBlock4Wrap'>
                <div className='genericBlock4Text'>
                    <div className='genericBlock4TitleSection'>
                        <h6 className='genericBlock4H6'><b>KEEP UP TO DATE</b></h6>
                    </div>
                    <div className='genericBlock4TitleSection2'>
                        <h3 className='genericBlock4H3'>Discover more about Pluralsight</h3>
                    </div>
                    <div className='spacer'/>
                    <div className='genericBlock4Cont'>
                        {bloques.map(
                        (oculto) => {
                        return <MostrarContenidoDinamico2 {...oculto}/>
                        }
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}