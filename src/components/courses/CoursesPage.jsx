import React, { useEffect } from "react";
import { useState } from "react";
import {connect} from 'react-redux';
import {setCourse,loadCourse} from '../../Redux/Actions/CourseAction';
import CourseList from './CourseList.jsx';
import {loadAuthors} from '../../Redux/Actions/AutherAction';

import CourseForm from "./CourseForm.jsx";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner.jsx";

function CoursesPage({courses,setCourses,loadCourses,
  loadAuthors,authors,history,isLoading})
{

  useEffect(()=>{
    if(courses.length===0){
    loadCourses();
    }
    console.log("bhijete");
    if(authors.length===0){
    loadAuthors().catch(err=>{throw err});
    }
  },[])


  return (
    <div>
      {isLoading?<Spinner/>:
      <>
     <button type="button"  className="btn btn-primary" onClick={()=>history.push('/course')}>
       Add Course
      </button>
        {console.log(courses[0])}
        {console.log(authors)}
        
        {
          
          courses[0]&&authors[0]?
            <CourseList courses={courses[0]} authors={authors[0]}/>
          :<div>No Courses Enrolled</div>
          
        }
       </>}
    </div>
  );
}

const mapStateToProps=state=>({
  courses:state.courses.courses,
  authors:state.authors.authors,
  isLoading:state.apiCallStatus.apiCallsInProgress>0
});

const mapDispatchToProps=dispatch=>({
  setCourses:(data)=>dispatch(setCourse(data)),
  loadCourses:()=>dispatch(loadCourse()),
  loadAuthors:()=>dispatch(loadAuthors())
});

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
