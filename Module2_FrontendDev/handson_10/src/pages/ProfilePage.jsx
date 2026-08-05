import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEnrolledCourses, unenrollCourse } from '../store/coursesSlice';

const ProfilePage = () => {
  const enrolledCourses = useSelector(selectEnrolledCourses);
  const dispatch = useDispatch();

  // Calculate enrolled credits
  const totalCredits = enrolledCourses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div className="container">
      {/* Student Profile Dashboard Card */}
      <div className="profile-card">
        <div className="profile-avatar-large">AM</div>
        <div className="profile-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <h3>Alex Morgan</h3>
            <div className="session-badge-container">
              <span className="badge success">Active Session</span>
              <span className="badge primary">Undergraduate</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Department of Computer Science & Engineering</p>
          
          <div className="profile-meta-grid">
            <div className="profile-meta-item">
              <strong>Student ID:</strong> SID-2026-8809
            </div>
            <div className="profile-meta-item">
              <strong>Academic Program:</strong> B.S. in Computer Science
            </div>
            <div className="profile-meta-item">
              <strong>Advisor:</strong> Dr. Evelyn Harris
            </div>
            <div className="profile-meta-item">
              <strong>Registered Credits:</strong> {totalCredits} Credits
            </div>
          </div>
        </div>
      </div>

      {/* API Session Metadata Panel */}
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2.5rem', boxShadow: 'var(--shadow)' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="1.1rem" height="1.1rem" style={{ color: 'var(--primary)' }}>
            <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.75 1.5a.75.75 0 0 1 .43.916l-1.5 4.75a.75.75 0 1 1-1.43-.45l1.013-3.207-9.781 9.781a.75.75 0 1 1-1.06-1.06l9.781-9.781-3.207 1.013a.75.75 0 0 1-.915-.43Z" clipRule="evenodd" />
          </svg>
          Active API Gateway Session
        </h4>
        <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ fontWeight: '600' }}>Bearer Auth Token:</span>
            <code style={{ color: 'var(--primary)', fontWeight: '700' }}>Bearer mock-jwt-token-xyz-12345</code>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ fontWeight: '600' }}>Gateway Endpoint Base:</span>
            <code style={{ color: 'var(--text-muted)' }}>https://jsonplaceholder.typicode.com</code>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '600' }}>HTTP Headers Configured:</span>
            <code style={{ color: 'var(--text-muted)' }}>Accept/Content-Type: application/json</code>
          </div>
        </div>
      </div>

      {/* Enrolled Courses list */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
        Enrolled Course Registrations ({enrolledCourses.length})
      </h3>
      
      {enrolledCourses.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3.5rem 1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1.5px dashed var(--border)', color: 'var(--text-muted)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="2.5rem" height="2.5rem" style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.5 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>No active registrations found.</p>
          <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Navigate to the Course Directory tab to register for courses.</p>
        </div>
      ) : (
        <div className="course-grid">
          {enrolledCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="card-body">
                <div className="card-header">
                  <span className="code-badge">{course.code}</span>
                  <span className="credits-badge">{course.credits} Credits</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)', margin: '0.5rem 0 0.75rem' }}>
                  {course.name}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Successfully enrolled via Central API mapping to Post #{course.id}.
                </p>
              </div>
              <button className="btn-danger" onClick={() => dispatch(unenrollCourse(course.id))} style={{ marginTop: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="1rem" height="1rem">
                  <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.842 10.51a3.25 3.25 0 0 0 3.238 2.99h4.172a3.25 3.25 0 0 0 3.238-2.99l.842-10.51.149.022a.75.75 0 1 0 .23-1.482A41.802 41.802 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM7.5 3.75A1.25 1.25 0 0 1 8.75 2.5h2.5A1.25 1.25 0 0 1 12.5 3.75v.4c-.833-.046-1.671-.077-2.5-.093-.829.016-1.667.047-2.5.093v-.4Z" clipRule="evenodd" />
                </svg>
                Un-enroll
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
