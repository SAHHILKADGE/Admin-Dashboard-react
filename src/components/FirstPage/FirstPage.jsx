import './FirstPage.css'
import MainDash from '../MainDash/MainDash';
import RightSide from '../RigtSide/RightSide';



const FirstPage = () => {
  return (
    <div className="First">
      <div className="FirstGlass">
        <div className='first-left'>
            <MainDash/>
        </div>
        <div className='first-right'>
            <RightSide/>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
