import './App.css'
import  FirstPage  from './components/FirstPage/FirstPage';
import {Routes , Route} from "react-router-dom";
import Sidebar from './components/Sidebar';
import { MemberListMain } from './components/MemberLIst/MemberListMain';
import { ComplaintMain } from './components/Complaint/ComplaintMain';
import { NoticeMain } from './components/Notice/NoticeMain';
import { OtherMain } from './components/Other/OtherMain';


function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
      <Routes>
      <Route path="/"  element={<Sidebar/>}>
        <Route index element={<FirstPage/>}/>
        <Route path="member" element={<MemberListMain/>}/>
        <Route path="complaint" element={<ComplaintMain/>}/>
        <Route path="notice" element={<NoticeMain/>}/>
        <Route path="other" element={<OtherMain/>}/>
        {/* index is use to keep that route to front of all  */}
      </Route>
    </Routes>
    </div>
    </div>
  );
}

export default App;
