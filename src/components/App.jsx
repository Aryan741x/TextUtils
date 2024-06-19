import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx';
import Textform from './Textform.jsx';
import Alert from './Alert.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  useEffect(()=>{
    document.body.style.backgroundColor = 'gray';
  },[]);
  const [count, setCount] = useState(0);
  const [Mode, setMode] = useState('dark');
  const [alert,setalert] = useState(null);
  const showAlert = (message,type)=>{
    setalert({
      message : message,
      type : type
    });
    setTimeout(() => {
      setalert(null);
    },1500);
  }
  const [state, setState] = useState(
    {
      color:'white'
    }
  )
  const toggleState = (event)=>{
    if(Mode==='dark'){
      setMode('light');
      setState({
        color:'black'
      })
      document.body.style.backgroundColor = 'white';
      showAlert(' Light Mode Enabled','success');
    }
    else{
      setMode('dark');
      setState({
        color:'white'
      })
      document.body.style.backgroundColor = 'gray';
      showAlert(' Dark Mode Enabled','success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={Mode} alert={alert} showAlert={showAlert} toggleState={toggleState} state={state} />
        <Alert alert={alert} showAlert={showAlert} />
        <Switch>
          <Route exact path='/'><Textform header="Text Area" mode={Mode} alert={alert} showAlert={showAlert} /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;