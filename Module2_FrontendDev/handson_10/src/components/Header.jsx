import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEnrolledCourses } from '../store/coursesSlice';

const Header = () => {
  const enrolledCourses = useSelector(selectEnrolledCourses);

  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        <div className="logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25rem" height="1.25rem">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0l9.75 4.333a.75.75 0 0 1 0 1.373L12.3 12.845a.75.75 0 0 1-.6 0L2 8.512a.75.75 0 0 1 0-1.373L11.7 2.805Z" />
            <path d="M22.5 12.51v3.287c0 .196-.076.384-.211.524l-1.25 1.3a.75.75 0 0 1-1.078 0l-1.25-1.3a.75.75 0 0 1-.211-.524v-3.287L12 15.656l-6.5-2.888v3.287c0 .196-.076.384-.211.524l-1.25 1.3a.75.75 0 0 1-1.078 0l-1.25-1.3A.75.75 0 0 1 1.5 16.32v-3.287l9.7 4.312a1.25 1.25 0 0 0 1.1 0l9.7-4.312Z" />
            <path d="M12 18.706 5.5 15.817v2.404c0 .546.302 1.045.787 1.288l5 2.5a1.25 1.25 0 0 0 1.1 0l5-2.5c.484-.243.786-.742.786-1.288v-2.404l-6.5 2.889Z" />
          </svg>
        </div>
        <span>EduPortal</span>
      </Link>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Course Directory
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Enrolled ({enrolledCourses.length})
        </NavLink>
        <div className="user-badge">
          <div className="user-avatar" title="Logged in as Alex Morgan">AM</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
