import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails: React.FC = () => {
  const { id } = useParams();
  // Fetch the profile details by ID
  return (
    <div className="profile-details">
      <h1>Profile Details</h1>
      <p>Details for profile ID: {id}</p>
    </div>
  );
};

export default ProfileDetails;