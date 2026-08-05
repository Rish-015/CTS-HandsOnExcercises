import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchAllCourses, 
  selectCourses, 
  selectCoursesLoading, 
  selectCoursesError,
  selectEnrolledCourses
} from '../store/coursesSlice';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const loading = useSelector(selectCoursesLoading);
  const error = useSelector(selectCoursesError);
  const enrolledCourses = useSelector(selectEnrolledCourses);

  // Local state for search/filtering
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch courses on mount
  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);

  // Filter courses based on search term
  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate enrolled credits
  const enrolledCredits = enrolledCourses.reduce((acc, course) => acc + course.credits, 0);
  const CREDIT_LIMIT = 15;
  const progressPercent = Math.min((enrolledCredits / CREDIT_LIMIT) * 100, 100);

  return (
    <div className="container">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-title">
          <h2>Student Course Registry</h2>
          <p>Browse, search, and register for courses using Redux state management and a centralized Axios client.</p>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.5rem" height="1.5rem">
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 .957.722A8.236 8.236 0 0 1 6 18c1.905 0 3.68.646 5.1 1.76a.75.75 0 0 0 .9 0 8.242 8.242 0 0 1 5.1-1.76 8.239 8.239 0 0 1 2.793.534.75.75 0 0 0 .957-.722V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533A.75.75 0 0 0 12 4.5v14.25a.75.75 0 0 1-.75-.75V4.533Z" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">{courses.length}</div>
            <div className="stat-label">Available Courses</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.5rem" height="1.5rem">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.14-.082l4-5.6Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">{enrolledCourses.length}</div>
            <div className="stat-label">Enrolled Courses</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.5rem" height="1.5rem">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1-1.06 1.06L14 6.06V16.75a.75.75 0 0 1-1.5 0V6.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06l4.25-4.25ZM6.75 19.25a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-value">{enrolledCredits} / {CREDIT_LIMIT}</div>
            <div className="stat-label">Registered Credits</div>
          </div>
        </div>
      </div>

      {/* Credit Progress Bar */}
      {enrolledCourses.length > 0 && (
        <div className="progress-container">
          <div className="progress-header">
            <span>Registration Credit Limit Progress</span>
            <span>{progressPercent.toFixed(0)}% ({enrolledCredits} / {CREDIT_LIMIT} Credits)</span>
          </div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      )}

      {/* Controls: Search */}
      <div className="controls-bar">
        <div className="search-wrapper">
          <svg className="search-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search by course name or course code..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="loading-spinner">
          <div className="spinner-icon"></div>
          <div>Loading course directory...</div>
        </div>
      )}

      {/* Error Handling UI */}
      {error && (
        <div className="error-banner">
          <h3>API Request Failure</h3>
          <p>{error}</p>
          <button className="btn-primary" onClick={() => dispatch(fetchAllCourses())}>
            Retry API Fetch
          </button>
        </div>
      )}

      {/* Course Grid */}
      {!loading && !error && (
        <>
          {filteredCourses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
              No courses match your search criteria.
            </div>
          ) : (
            <div className="course-grid">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Framework State Management Comparison Section */}
      <section className="comparison-box">
        <h3>Framework State Management Comparison (Task 151)</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
          Overview of patterns, boilerplate, and model architecture differences across standard modern web frameworks.
        </p>

        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature / Metric</th>
                <th>React (Redux Toolkit)</th>
                <th>Angular (NgRx)</th>
                <th>Vue 3 (Pinia)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Architecture</strong></td>
                <td>Slice, Reducer, Thunk, Selector</td>
                <td>Actions, Reducers, Effects, Selectors</td>
                <td>Setup Store (ref, computed, actions)</td>
              </tr>
              <tr>
                <td><strong>Boilerplate Level</strong></td>
                <td>Moderate (simplified via Redux Toolkit API)</td>
                <td>High (requires actions, reducers, effects files)</td>
                <td>Very Low (native composition design style)</td>
              </tr>
              <tr>
                <td><strong>Reactivity Model</strong></td>
                <td>Immutable draft updates via Immer</td>
                <td>RxJS Observables & Immutable state flows</td>
                <td>Direct reactive objects (`ref`, `reactive`)</td>
              </tr>
              <tr>
                <td><strong>Async Handling</strong></td>
                <td>`createAsyncThunk` middleware pipeline</td>
                <td>NgRx Effects (`Actions.pipe(mergeMap(...))`)</td>
                <td>Direct async functions inside store actions</td>
              </tr>
              <tr>
                <td><strong>Learning Curve</strong></td>
                <td>Moderate</td>
                <td>Steep (Requires high RxJS mastery)</td>
                <td>Gentle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
