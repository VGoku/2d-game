import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';

const Profile = () => {
  const { character, updateCharacter } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: character?.title || '',
    bio: character?.bio || '',
    avatar: character?.avatar || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateCharacter(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src={character?.avatar || '/default-avatar.png'} 
          alt="Character Avatar" 
          className="profile-avatar"
        />
        <div className="profile-title">
          <h2>{character?.name}</h2>
          <p>{character?.title || 'Untitled'}</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Level</h3>
          <p>{character?.level || 1}</p>
        </div>
        <div className="stat-card">
          <h3>Experience</h3>
          <p>{character?.experience || 0}/1000</p>
        </div>
        <div className="stat-card">
          <h3>Power</h3>
          <p>{character?.power || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Gold</h3>
          <p>{character?.gold || 0}</p>
        </div>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio" className="form-label">Biography</label>
            <textarea
              id="bio"
              name="bio"
              className="form-input"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar" className="form-label">Avatar URL</label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              className="form-input"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>

          <div className="button-group">
            <button type="submit" className="gothic-button primary">Save Changes</button>
            <button 
              type="button" 
              className="gothic-button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-content">
          <div className="bio-section">
            <h3>Biography</h3>
            <p>{character?.bio || 'No biography written yet.'}</p>
          </div>

          <div className="achievements-section">
            <h3>Achievements</h3>
            <div className="achievements-grid">
              {character?.achievements?.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              )) || <p>No achievements yet.</p>}
            </div>
          </div>

          <button 
            className="gothic-button"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile; 