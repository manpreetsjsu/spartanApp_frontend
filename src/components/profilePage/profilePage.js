import React , {Component} from 'react';
import {Segment,Grid} from 'semantic-ui-react';
import { Header, Icon, Image } from 'semantic-ui-react'

import ProfileCourseGrid from '../grid/profileCourseGrid';
import ProfileCard from '../cards/profileCard';
import MenuBar from '../menuBar/menuBar'
import getUser from '../services/getUser';
import getCourses from '../services/getCourses';
import {Redirect} from 'react-router-dom';
import LexChat from '../lexChat/lexChat';
import postEnrollCourse from "../services/postEnrollCourse";


class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state= {
            logoutRedirect:false,
            allCourses:[],
            userEnrolledCourses: [],
            atProfilePage:true
        }}

    componentWillMount() {
        let userEnrolledSubjects=[];
        getUser().then(result => {
            this.setState({user: result.data},()=>{this.getCourses(userEnrolledSubjects)}); //callback inside setState
        })
            .catch(error => {
                    console.log(error);
                }
            );

    }
    getCourses=(userEnrolledSubjects)=>{
        //calling service
        getCourses().then(result=>{
            this.setState({allCourses:result.data},()=>{this.generateEnrolledList(userEnrolledSubjects)}); //Callback inside Setstate
        })
            .catch(error=>{
                    console.log(error);
                }
            );
    };


    generateEnrolledList=(userEnrolledSubjects)=>{
        for(let i=0; i<this.state.user.enrolledCourses.length ;i++){
            for(let j=0; j<this.state.allCourses.length ;j++){
                if(this.state.user.enrolledCourses[i] === this.state.allCourses[j].name)
                {
                    userEnrolledSubjects.push(this.state.allCourses[j]);
                }
            }
        }
        this.setState({userEnrolledCourses:userEnrolledSubjects});
    };

    unEnrollCourse=(name)=>{
        console.log("disenrolling....");
        let copyUserEnrolledCourses = [...this.state.userEnrolledCourses];
        let copyCourses = [];
        console.log(copyUserEnrolledCourses);
        this.state.userEnrolledCourses.map((course,index)=>{
            if(course.name ===name){
                copyUserEnrolledCourses.splice(index,1);
            }
            else{
                copyCourses.push(course.name);
            }
        });
        this.setState({userEnrolledCourses:copyUserEnrolledCourses});
        console.log(this.state.user);
        let copyState={...this.state.user,enrolledCourses:copyCourses};

        postEnrollCourse(copyState).then((result)=>{
        })
            .catch (err=>{
                console.log(err);
            })
    };

    render(){
        if(!sessionStorage.getItem('userID')) {
            return <Redirect to={'/'}/>;
        };
        return(

        <div>
           <MenuBar atProfilePage={this.state.atProfilePage} />

            <Grid container style={{marginTop:'10%'}}>
                    <Grid.Column width={4} floated='left'>
                        <ProfileCard/>
                    </Grid.Column>
                <Grid.Column textAlign='center' width={10} floated='left'>
                    <Segment>
                        <div  style={{position:'relative'}}>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='users' circular />
                                <Header.Content>
                                    Currently Enrolled Courses
                                </Header.Content>
                            </Header>
                        </div>
                        <ProfileCourseGrid  disEnrollCourse={this.unEnrollCourse} allCourses={this.state.userEnrolledCourses}/>
                    </Segment>
                </Grid.Column>
            </Grid>

            <LexChat botName="SpartanConnection"
                     IdentityPoolId="us-east-1:0c8a5c08-b163-43be-9b65-feb4ae15dc76"
                     placeholder="How Can I Help You?"
                     height='230px'
                     headerText="CHATBOT"/>

        </div>

        );
    }
}

export default ProfilePage;