import { IonButton, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import DynamicModal from '../components/DynamicModal';
import './Home.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
    const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <DynamicModal open={showModal} setShowModal={setShowModal}/>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonPage>
  );
};

export default ExploreContainer;