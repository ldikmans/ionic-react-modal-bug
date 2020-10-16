import { IonButton, IonItem, IonLabel, IonModal } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import './ExploreContainer.css';
import ModalHeader from './ModalHeader';

interface ContainerProps {
    open: boolean,
    setShowModal: Function
 }

const DynamicModal: React.FC<ContainerProps> = ({open, setShowModal}) => {

  const history = useHistory();

  function goToHomePage() {
    setShowModal(false);
    history.replace('/home', {direction: 'back'});
  }

  return (
      <IonModal 
        isOpen={open}
        swipeToClose = {true}
        cssClass = 'modal'
      >
        <ModalHeader title="This is content from a separate modal" setShowModal={setShowModal}/>
        <IonItem>
          <IonLabel>
            Click this button to go to the home page
            </IonLabel>
          <IonButton onClick={() => { goToHomePage() }}>Go to home page</IonButton>
        </IonItem>
      </IonModal>
  );
};

export default DynamicModal;