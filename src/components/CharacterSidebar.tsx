import React, { useState, useRef } from 'react';
import { useCharacterStore } from '../store/characterStore';

const CharacterSidebar = () => {
  const { character } = useCharacterStore();
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-vampire-black/90 backdrop-blur-sm shadow-gothic">
      <div className="p-6 space-y-6">
        {/* Avatar Section */}
        <div className="flex flex-col items-center space-y-4">
          <div
            onClick={handleAvatarClick}
            className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer group"
          >
            {avatar ? (
              <img
                src={avatar}
                alt="Character Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gothic-purple/50 flex items-center justify-center">
                <span className="text-gray-400">Add Avatar</span>
              </div>
            )}
            <div className="absolute inset-0 bg-vampire-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-crimson">Change Avatar</span>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Character Info */}
        <div className="space-y-4 text-center">
          <div>
            <h2 className="text-2xl font-serif text-crimson">{character?.name || 'Unnamed'}</h2>
            <p className="text-blood">Level {character?.level || 1}</p>
          </div>

          <div className="space-y-2">
            <div className="bg-gothic-purple/30 p-3 rounded-lg">
              <p className="text-sm text-gray-400">Race</p>
              <p className="text-white">{character?.race || 'Unknown'}</p>
            </div>
            <div className="bg-gothic-purple/30 p-3 rounded-lg">
              <p className="text-sm text-gray-400">Bloodline</p>
              <p className="text-white">{character?.bloodline || 'Unknown'}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-2">
            <h3 className="text-lg font-serif text-gray-300">Attributes</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gothic-purple/30 p-2 rounded-lg">
                <p className="text-sm text-gray-400">Strength</p>
                <p className="text-white">{character?.strength || 0}</p>
              </div>
              <div className="bg-gothic-purple/30 p-2 rounded-lg">
                <p className="text-sm text-gray-400">Agility</p>
                <p className="text-white">{character?.agility || 0}</p>
              </div>
              <div className="bg-gothic-purple/30 p-2 rounded-lg">
                <p className="text-sm text-gray-400">Intelligence</p>
                <p className="text-white">{character?.intelligence || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CharacterSidebar; 