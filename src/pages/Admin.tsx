import React from 'react';
import ProfileForm from '../components/ProfileForm';

const Admin: React.FC = () => {
  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <ProfileForm />
    </div>
  );
};

export default Admin;