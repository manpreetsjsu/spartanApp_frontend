import React from 'react';
import {Card,Image,Button} from 'semantic-ui-react';




const CourseCard = (props) => {
    return (
        <Card raised>
            <Image src={require('../../assets/images/'+props.image+'.jpg')} />
            <Card.Content>
                <Card.Header>{props.header}</Card.Header>
                <Card.Meta>Instructor:{props.instructor}</Card.Meta>
                <Card.Meta>Mentor:{props.tutor}</Card.Meta>
                <Card.Description>
                    <Button onClick={props.enrollCourse} color='blue' >
                        Click to enroll this course
                    </Button>
                </Card.Description>
            </Card.Content>
        </Card>
    );

};
export default CourseCard;
