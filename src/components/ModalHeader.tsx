import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import './ModalHeader.css'

interface ContainerProps {
    title: string,
    setShowModal: Function
    onDismissFunction?: Function;
}

export const ModalHeader: React.FC<ContainerProps> = ({ title, setShowModal, onDismissFunction }) => {

    function handleModalClose() {
        setShowModal(false);

        if (onDismissFunction) {
            onDismissFunction();
        }
    }

    return (
        <IonHeader>
            <IonToolbar id="modal-toolbar" className="ion-no-padding ion-no-margin">
                <IonTitle id="modal-title-text">{title}</IonTitle>
                <IonButtons slot="end" className="ion-no-padding ion-no-margin">
                    <div tabIndex={0} />
                    <IonButton id="modal-button-close" onClick={() => handleModalClose()}>Close</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
};

export default ModalHeader;