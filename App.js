import logo from './logo.svg';
import './App.css';
import HelloFunc from './Components/HelloFunc';
import HelloClass from './Components/HelloClass';
import ImgFun from './Components/ImgFun';
import TimeFunc from './Components/TimeFunc';
import FactFun from './Components/FactFun';
import NameArrayFun from './Components/NameArrayFun';
import EmpFun from './Components/EmpFun';
import HelloState from './Components/HelloState';
import CountState from './Components/CountState';
import StylingFun1 from './Components/StylingFun1';
import TableStyleFun from './Components/TableStyleFun';
import ParaChangeFun from './Components/ParaChangeFun';
import ShowHideFun from './Components/ShowHideFun';
import WelUserFun from './Components/WelUserFun';
import Form1Fun from './Components/Form1Fun';
import RestAPIFun from './Components/RestAPIFun';
import { Link, Route ,Routes} from 'react-router-dom';
import GetEmps from './Components/GetEmps';
import MyEmpForm from './Components/MyEmpForm';
import FormValidationFun from './Components/FormValidationFun';
function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a>
      <HelloFunc />
      <HelloClass />
       <TimeFunc />
      <ImgFun />
       <FactFun number='5' />
      <NameArrayFun />
      <EmpFun />
       <HelloState />
        <CountState />
       <HelloState />
       <CountState />
       <StylingFun1 />
       <TableStyleFun />
       <ParaChangeFun />
       <ShowHideFun />
       <WelUserFun />
       <Form1Fun />
        </header>
        <Form1Fun/>*/}
        
      <ul class="nav navbar">
             <li class="nav-item">
                <Link to="/" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/getusers" class="nav-link">GetUsers</Link>
            </li>
            <li class="nav-item">
                <Link to="/gettime" class="nav-link">GetTime</Link>
            </li>
            <li class="nav-item">
                <Link to="/getemp" class="nav-link">GetEmp</Link>
            </li>
            <li class="nav-item">
                <Link to="/userlogin" class="nav-link">LogIn</Link>
            </li> 
            <li class="nav-item">
                <Link to="/getemps" class="nav-link">Emps</Link>
            </li>
            <li class="nav-item">
                <Link to="/getempform" class="nav-link">EmpForm</Link>
            </li>
            <li class="nav-item">
                <Link to="/validateform" class="nav-link">ValidateForm</Link>
            </li>
        </ul>

        
      <Routes>
        <Route path='/' element={<HelloFunc/>}/>
         <Route path='/getusers' element={<RestAPIFun/>} /> 
         <Route path='/gettime' element={<TimeFunc/>} /> 
         <Route path='/getemp' element={<EmpFun/>} /> 
        <Route path='/getemps' element={<GetEmps/>} />
       <Route path='/userlogin' element={<WelUserFun/>} /> 
       <Route path='/getempform' element={<MyEmpForm/>} /> 
       <Route path='/validateform' element={<FormValidationFun/>}/>
       </Routes>
    
      
    </div>
  );
}

export default App;
