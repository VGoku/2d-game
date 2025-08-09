import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const PublicProfile = () => {
  const { username } = useParams<{ username: string }>();
  const { getPublicProfile } = useAuthStore();
  const character = getPublicProfile(username || '');

  if (!character) {
    return (
      <div className="profile-container">
        <h2>Character Not Found</h2>
        <p>The dark being you seek does not exist in this realm.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src={character.avatar || '/default-avatar.png'} 
          alt="Character Avatar" 
          className="profile-avatar"
        />
        <div className="profile-title">
          <h2>{character.name}</h2>
          <p>{character.title || 'Untitled'}</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Level</h3>
          <p>{character.level}</p>
        </div>
        <div className="stat-card">
          <h3>Power</h3>
          <p>{character.power}</p>
        </div>
        <div className="stat-card">
          <h3>Rank</h3>
          <p>{character.rank || 'Unranked'}</p>
        </div>
        <div className="stat-card">
          <h3>Victories</h3>
          <p>{character.victories || 0}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="bio-section">
          <h3>Biography</h3>
          <p>{character.bio || 'This dark being keeps their secrets...'}</p>
        </div>

        <div className="achievements-section">
          <h3>Notable Achievements</h3>
          <div className="achievements-grid">
            {character.achievements?.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            )) || <p>No achievements yet recorded.</p>}
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {character.recentActivity?.map((activity, index) => (
              <div key={index} className="activity-item">
                <span className="activity-date">{new Date(activity.date).toLocaleDateString()}</span>
                <span className="activity-description">{activity.description}</span>
              </div>
            )) || <p>No recent activities recorded.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile; 