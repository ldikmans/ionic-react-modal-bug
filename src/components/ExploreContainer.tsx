import { IonButton, IonItem, IonLabel } from '@ionic/react';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const history = useHistory();

  function goToModalPage() {
    history.push('/modalPage');
  }

  return (
      <Fragment>
        <IonItem>
          <IonLabel>
            Click this button to go to the modal page
            </IonLabel>
          <IonButton onClick={(event) => { event.preventDefault();goToModalPage()}}>Go to modal page</IonButton>
        </IonItem>
      </Fragment>
  );
};

export default ExploreContainer;

