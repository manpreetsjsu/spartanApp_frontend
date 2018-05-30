import React from 'react';
import {Grid} from 'semantic-ui-react';
import ProfileCourseCard from '../cards/profileCourseCard';
import poster from '../../assets/images/poster.png';
let courses=[
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},


];

const CourseGrid = (props) => {

    return (
        <div>
            {
                props.allCourses.map((course,index)=>
                    <Grid.Column
                        width={1}
                        key={index}
                        style={{marginBottom:'10%',display:'inline-block',marginRight:'2%',marginLeft:'2%'}}>
                        <ProfileCourseCard
                            header={course.name}
                            instructor={course.instructor}
                            image={courses[index].image}
                            tutor={course.tutor}
                            disEnrollCourse={()=>props.disEnrollCourse(course.name)}/>
                    </Grid.Column>
                )
            }

        </div>
    );

};
export default CourseGrid;
