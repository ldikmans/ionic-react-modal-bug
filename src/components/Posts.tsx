import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/react';

interface ContainerProps { 
    error: boolean
    closeModal: Function
}

const Posts: React.FC<ContainerProps> = ({error, closeModal}) => {

    const [posts, setPosts] = useState<[Post]>();

    interface Post {
        id: string;
        title: string;
    }

    const getPosts = async () => {
        try {
             const userPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(userPosts.data);
            if(error){
                throw new Error('error thrown');
            }

        } catch (err) {
            console.error(err.message);
            closeModal();
        }
    };

    useEffect(() => {
        getPosts();
    });

   
    return (
        <IonContent>

            <Fragment>
                <IonItem className="ion-no-padding ion-no-margin" id="see-suggestions-component-title-item" lines="full">
                    <div tabIndex={-1} />
                    <IonLabel className="ion-no-padding ion-no-margin" id="see-suggestions-component-title-text">
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
                </IonList>
                <IonButton onClick={()=> closeModal()}>Close</IonButton>
            </Fragment>
        </IonContent>
    );
};

export default Posts;