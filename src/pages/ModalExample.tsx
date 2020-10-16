import { IonButton, IonContent, IonItem, IonList, IonModal, IonPage } from '@ionic/react';
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
    <IonPage id="home-page-visible">
    <IonContent>
    <IonList>
    <IonItem><div tabIndex={0} />Two different tests, one fails one succeeds</IonItem>
      <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
      <IonButton onClick={() => {setShowModal(true); setThrowError(true)}}> Open Modal that throws and error and closes</IonButton>
    </IonList>
     
    </IonContent>
     <IonModal isOpen={showModal} 
      cssClass='modal'
      onDidDismiss={()=> {hideModal()}}>
        <ModalHeader title="This is a modal with a header that can close" setShowModal={setShowModal} />
        <Posts  error={throwError} setShowModal={setShowModal}/>
      </IonModal>
    </IonPage>
  );
};

export default ExploreContainer;