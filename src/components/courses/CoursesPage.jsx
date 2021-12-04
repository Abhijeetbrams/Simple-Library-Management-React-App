import React, { useEffect } from "react";
import { useState } from "react";
import {connect} from 'react-redux';
import {setCourse,loadCourse} from '../../Redux/Actions/CourseAction';
import CourseList from './CourseList.jsx';
import {loadAuthors} from '../../Redux/Actions/AutherAction';

function CoursesPage({courses,setCourses,loadCourses,loadAuthors,authors})
{
  let [formData,setFormData]= useState({
    title:''
  });

  useEffect(()=>{
    if(courses.length===0){
    loadCourses();
    }
    console.log("bhijete");
    if(authors.length===0){
    loadAuthors().catch(err=>{throw err});
    }
  },[])

  let handleChange= function(event){
     const {name,value}=event.target;
     setFormData({...formData,[name]:value});
     //console.log(formData);
  }

  let handleSubmit=(event)=>{
    event.preventDefault();
    if(formData.title==null)
    {
      alert("Please enter the username");
      return ;
    }
    setCourses(formData);
    console.log(formData);
  }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input type="text" onChange={handleChange} name="title" value={formData.title} />
        <input type="submit" />
        {console.log(courses[0])}
        {console.log(authors)}
        {
          courses[0]&&authors[0]?
            <CourseList courses={courses[0]} authors={authors[0]}/>
          :<div>No Courses Enrolled</div>
          
        }
       </form>
    </div>
  );
}

const mapStateToProps=state=>({
  courses:state.courses.courses,
  authors:state.authors.authors
});

const mapDispatchToProps=dispatch=>({
  setCourses:(data)=>dispatch(setCourse(data)),
  loadCourses:()=>dispatch(loadCourse()),
  loadAuthors:()=>dispatch(loadAuthors())
});

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
