import { IonButton, IonContent, IonItem, IonLabel } from '@ionic/react';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const history = useHistory();

  function goToModalPage() {
    history.push('/modalPage');
  }

  function goToSeparateModalPage(){
    history.push('/separateModal');
  }

  return (
      <Fragment>
        <IonItem routerLink="/modalPage">
          <IonLabel>
            Click this button to go to the modal page
            </IonLabel>
          <IonButton>Go to modal page</IonButton>
        </IonItem>
        <IonItem>
          <IonLabel>
            Click this button to go to the modal page with a separate modal component
            </IonLabel>
          <IonButton onClick={(event) => { event.preventDefault();goToSeparateModalPage() }}>Go to separate modal component page</IonButton>
        </IonItem>
      </Fragment>
  );
};

export default ExploreContainer;

