import React from 'react';
import {Card,Image,Button} from 'semantic-ui-react';
const ProfileCard = () => {
    return (
        <div>
            <Card raised centered>
                <Image src={require('../../assets/images/spartan.jpg')} />
                <Card.Content style={{textAlign:'center'}}>
                    <Card.Header>Spartan</Card.Header>
                    <Card.Meta>Connect with me on:</Card.Meta>
                    <Card.Description>
                        <a target="_blank" href="https://www.linkedin.com/school/san-jose-state-university/"><Button circular size='massive'  color='linkedin' icon='linkedin'/></a>
                        <a target="_blank" href="https://github.com/sjsu-cmpe"><Button circular size='massive' color='black' icon='github'/></a>
                        <a target="_blank" href="https://www.facebook.com/sanjosestate/"><Button circular size='massive' color='facebook' icon='facebook'/></a>
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );

};
export default ProfileCard;
