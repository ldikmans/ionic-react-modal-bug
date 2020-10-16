import { IonButton, IonModal, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import Posts from '../components/Posts';
import ModalHeader from '../components/ModalHeader';
import './Home.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
    const [showModal, setShowModal] = useState(false);
    const [throwError, setThrowError] = useState(false);

    function hideModal(){
      console.log('hiding the modal');
      setShowModal(false);
    }

  return (
    <IonPage>
      <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
      <IonButton onClick={() => {setShowModal(true); setThrowError(true)}}> Open Modal that throws and error and closes</IonButton>
      <IonModal isOpen={showModal} 
      cssClass='modal'
      onDidDismiss={()=> {hideModal()}}>
        <ModalHeader title="This is a modal with a header that can close" setShowModal={setShowModal} />
        <Posts  error={throwError} closeModal={hideModal}/>
      </IonModal>
    </IonPage>
  );
};

export default ExploreContainer;