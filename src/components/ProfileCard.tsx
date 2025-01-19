import React from 'react';

const ProfileCard: React.FC <{ profile: any; onSummary: () => void }> = ({ profile, onSummary }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={onSummary}>Summary</button>
    </div>
  );
};

export default ProfileCard;