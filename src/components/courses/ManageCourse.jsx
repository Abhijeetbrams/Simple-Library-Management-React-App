import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourse, setCourse } from '../../Redux/Actions/CourseAction';
import { loadAuthors } from "../../Redux/Actions/AutherAction";
//import PropTypes from "prop-types";
import CourseForm from './CourseForm.jsx';
import { newCourse } from "../../../tools/mockData";
import {apiCallError} from '../../Redux/Actions/apiAction';

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  setCourses,
  history,
  apiCallError,
  ...props
  
}) {
  const [course, setCours] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCours({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCours(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    setCourses(course).then(() => {
      history.push("/courses")
    }).catch(error => {
      console.log(error,);
      setErrors({ onSave: error.message });
      apiCallError(error);
    }
    )
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}



export function getCourseBySlug(courses, slug) {
    console.log(courses[0]);
  return courses[0].find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.courses.length > 0
      ? getCourseBySlug(state.courses.courses, slug)
      : newCourse;

      console.log(slug);
      console.log(state.authors.authors);
     //console.log(state.courses.courses);
  return {
    course,
    courses: state.courses.courses,
    authors: state.authors.authors
    //apiCallsInProgress:state.apiCallStatus.apiCallsInProgress
  };
}

const mapDispatchToProps=dispatch=>({
    setCourses:(data)=>dispatch(setCourse(data)),
    loadCourses:()=>dispatch(loadCourse()),
    loadAuthors:()=>dispatch(loadAuthors()),
    apiCallError:(error)=>dispatch(apiCallError(error))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
