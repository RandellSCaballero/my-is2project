import '../App.css';
import CptHeader from '../componentes/cptHeader';
import CptBody from '../componentes/CptBody';
import CptBody2 from '../componentes/CptBody2';
import CptBody3 from '../componentes/CptBody3'
import CptBody4 from '../componentes/CptBody4';
import CptBody5 from '../componentes/CptBody5';
import CptBody7 from '../componentes/CptBody7';
import CptBody8 from '../componentes/CptBody8';
import CptFooter from '../componentes/CptFooter';

function Home() {
  return (
    <div className='App'>
    {/* <CptHeader/> */}
    <CptBody/>
    <br/>
    <div className='spcBtwn2'>
      <div className='journey_line'></div>
    </div>
    <CptBody2/>
    <CptBody3/>
    <CptBody4/>
    <CptBody5/>
    <div className='spcBtwn2'>
    </div>
    <CptBody7/>
    <CptBody8/>
    <CptFooter/>
    </div>
  );
}

export default Home;
