import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import MapView from "../components/MapView";

const Home: React.FC = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("/api/profiles");
        setProfiles(response.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="home">
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard
            profile={profile}
            onSummary={() => setSelectedProfile(profile)}
          />
        ))}
      </div>
      <MapView selectedProfile={selectedProfile} />
    </div>
  );
};

export default Home;
