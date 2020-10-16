import { IonButton, IonContent, IonItem, IonList, IonModal, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import Posts from '../components/Posts';
import ModalHeader from '../components/ModalHeader';
import './Home.css';

interface ContainerProps { }

const ModalPage: React.FC<ContainerProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [throwError, setThrowError] = useState(false);

  function hideModal() {
    console.log('hiding the modal');
    setShowModal(false);
  }



  return (
    <IonPage id="home-page-visible">
      <IonContent>
        <IonList>
          <IonItem>Two different tests</IonItem>
          <IonItem lines='none'> The first one opens the modal and fetches data</IonItem>
          <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          <IonItem lines='none'>The second one opens the modal, throws an exception and tries to close it when the exception is caught</IonItem>
          <IonButton onClick={() => { setShowModal(true); setThrowError(true) }}> Open Modal that throws and error and closes</IonButton>
        </IonList>
      </IonContent>

      <IonModal isOpen={showModal}
        cssClass='modal'
        onDidDismiss={() => { hideModal() }}>
        <ModalHeader title="This is a modal with a header that can close" setShowModal={setShowModal} />
        <Posts error={throwError} setShowModal={setShowModal} />
      </IonModal>
    </IonPage>
  );
};

export default ModalPage;