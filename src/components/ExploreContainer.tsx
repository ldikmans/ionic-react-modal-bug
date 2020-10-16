import { IonButton, IonContent, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
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
      <IonContent>
        <IonItem>
          <IonLabel>
            Click this button to go to the modal page
            </IonLabel>
          <IonButton onClick={(event) => { event.preventDefault(); goToModalPage() }}>Go to modal page</IonButton>
        </IonItem>
        <IonItem>
          <IonLabel>
            Click this button to go to the modal page with a separate modal component
            </IonLabel>
          <IonButton onClick={(event) => { event.preventDefault();goToSeparateModalPage() }}>Go to separate modal component page</IonButton>
        </IonItem>
      </IonContent>
  );
};

export default ExploreContainer;

