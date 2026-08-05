import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse, selectEnrolledCourses } from '../store/coursesSlice';
import { enrollStudent } from '../api/courseApi';

/**
 * CourseCard Component consuming Centralized API & Redux Store
 */
const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(selectEnrolledCourses);

  const isEnrolled = enrolledCourses.some(c => c.id === course.id);

  const handleEnroll = async () => {
    try {
      // Call Central API function
      await enrollStudent(101, course.id);
      // Dispatch Redux Action
      dispatch(enrollCourse(course));
    } catch (err) {
      console.error('Failed to enroll student via API:', err);
    }
  };

  return (
    <article className="course-card">
      <div className="card-body">
        <div className="card-header">
          <span className="code-badge">{course.code}</span>
          <span className="credits-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="0.9rem" height="0.9rem" style={{ marginRight: '0.2rem' }}>
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
            {course.credits} Credits
          </span>
        </div>
        <h3>{course.name}</h3>
        <p>{course.description}</p>
      </div>

      <div>
        {!isEnrolled ? (
          <button className="btn-primary" onClick={handleEnroll}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="1.1rem" height="1.1rem">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
            </svg>
            Enroll via Central API
          </button>
        ) : (
          <button className="btn-primary" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="1.1rem" height="1.1rem">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
            Enrolled
          </button>
        )}
      </div>
    </article>
  );
};

export default CourseCard;
