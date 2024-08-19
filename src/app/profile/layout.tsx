import { FC } from 'react';
import ProfileHeader from './profileHeader';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
  <ProfileHeader> {children}</ProfileHeader>
    

  );
};

export default ProfileLayout;
