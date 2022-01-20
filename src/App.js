
import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import Alerts from './component/Alerts';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [navmode, setnavmode] = useState('light')
  const [modebtn, setmodebtn] = useState('dark')
  const [myAlerts, setmyAlerts] = useState(null)

  const showAlerts = (text, messege) => {
    setmyAlerts({
      text: text,
      messege: messege
    })

  }
  const switched = () => {
    if (navmode === 'light') {
      setnavmode('dark')
      setmodebtn('light')
      showAlerts('success', 'Switched to dark mode')
      setTimeout(() => {
        setmyAlerts(null)
      }, 4000);
      document.title = 'TextUtils Dark'
    }
    else {
      setnavmode('light')
      setmodebtn('dark')
      showAlerts('success', 'Switched to light mode')
      setTimeout(() => {
        setmyAlerts(null)
      }, 4000);
      document.title = 'TextUtils Light'
    }
  }
  return (

    <Router>
      <Navbar navmode={navmode} modebtn={modebtn} switched={switched} title="TextUtils" home="TextUtils home" about="TextUtils about" />

      <Switch>
        <Route path="/home">
          <Alerts alerts={myAlerts} />
          <div >
            <Textarea modebtn={modebtn} />
          </div>

        </Route>
        <Route path="/about">
          <About />
        </Route>

      </Switch>






    </Router>



  );
}

export default App;
