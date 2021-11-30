import React from "react";
import { useState } from "react";
import {connect} from 'react-redux';
import {setCourse} from '../../Redux/Actions/setCourseAction';

function CoursesPage({courses,setCourses})
{
  let [formData,setFormData]= useState({
    title:''
  });

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
        {//console.log(courses)
          courses.map(course=>(
            <div key={course.title}>
                {course.title}
              </div>
          ))
        }
       </form>
    </div>
  );
}

const mapStateToProps=state=>({
  courses:state.courses.courses
});

const mapDispatchToProps=dispatch=>({
  setCourses:(data)=>dispatch(setCourse(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
