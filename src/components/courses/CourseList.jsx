import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {deleteCourse} from '../../Redux/Actions/CourseAction';

const CourseList = ({ courses,authors,deleteCourse }) => {

  const handleDelete=(id)=>{
   console.log(id);
   //debugger;
    deleteCourse(id);

  }
  return (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {courses && courses.map(course => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/courses/" + course.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{authors.find(a=>a.id===course.authorId).name}</td>
            <td>{course.category}</td>
            <button type="button" className="btn btn-outline-danger" onClick={()=>handleDelete(course.id)}>Delete</button>
           
          </tr>
        );
      })}
    </tbody>
  </table>);
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

const mapDispatchToProps=(dispatch)=>({
deleteCourse:(id)=>dispatch(deleteCourse(id))
});

export default connect(null,mapDispatchToProps)(CourseList);
