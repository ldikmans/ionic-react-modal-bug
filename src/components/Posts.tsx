import React, {useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/react';
import { useHistory } from 'react-router';

interface ContainerProps {
    error: boolean
    setShowModal: Function
}

const Posts: React.FC<ContainerProps> = ({ error, setShowModal }) => {

    const [posts, setPosts] = useState<[Post]>();
    const history = useHistory();

    interface Post {
        id: string;
        title: string;
    }

    function navigateToHome(){
        setShowModal(false);
        history.replace('/home', {direction: 'back'});
    }

    const getPosts = useCallback(async () => {
        try {
            const userPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(userPosts.data);
            if (error) {
                throw new Error('error thrown');
            }

        } catch (err) {
            console.error(err.message);
            setShowModal(false);
        }
    }, [setShowModal, error]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);


    return (

        <IonContent>
            <IonItem className="ion-no-padding ion-no-margin" lines="full">
                <div tabIndex={-1} />
                <IonLabel className="ion-no-padding ion-no-margin" >
                    <div className="ion-text-start ion-text-wrap">Posts​​​​​</div>
                </IonLabel>
            </IonItem>
            <IonList>
                {posts?.map((post) => (
                    <IonItem key={post.id}>
                        <IonLabel>{post.title}
                        </IonLabel>
                    </IonItem>
                ))}
                <IonButton onClick={() => {navigateToHome()}}>To the home page</IonButton>
            </IonList>
        </IonContent>
    );
};

export default Posts;