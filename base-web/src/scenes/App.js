import React from '../../node_modules/react';
import IntroView from './onboarding/intro/intro';
import '../style/style.css'
import 'materialize-css/dist/css/materialize.min.css';

import SignIn from './SignIn/signin';
import SignUp from './SignUp/signup';
import Welcome from './Welcome/welcome';

// ROTAS
import { BrowserRouter, Route } from "react-router-dom";

// STYLE
import "../style/style.css";
import "../style/normalize.css";
import "../style/styleAdm.css";



function App() {
  return (
    <BrowserRouter>
    
      <Route path="/" exact component={IntroView} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/welcome" component={Welcome} />
      
    </BrowserRouter>
  );
}

export default App;
