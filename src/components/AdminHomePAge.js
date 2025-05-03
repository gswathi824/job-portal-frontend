import { Link, Outlet } from 'react-router-dom';
import './AdminHome.css'; // Make sure this CSS file is in the same folder or adjust the path

export default function AdminHomePage() {
  return (
    <>
      <nav className="admin-nav">
        <ul className="nav-list">
          <li><Link to="/admin/home">Home</Link></li>
          <li><Link to="/admin/create-job">Create Job</Link></li>
          <li><Link to="/admin/logout">Logout</Link></li>
          <li><Link to="/admin/logout">Logout</Link></li>
        </ul>
      </nav>

      <div className="admin-content">
        <Outlet />
      </div>
    </>
  );
}
