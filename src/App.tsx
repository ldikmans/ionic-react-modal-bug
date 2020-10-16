import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ModalExample from './pages/ModalExample';
import SeparateModal from './pages/SeparateModal';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Home/>} />
        <Route exact path="/modalPage" render={()=><ModalExample/>} />
        <Route exact path="/separateModal" render={()=><SeparateModal/>}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
