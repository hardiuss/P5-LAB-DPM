import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Hardius Pratama',
    job: 'UI/UX Designer',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
