import { FC } from 'react';
import ProfileHeader from './profileHeader';
export const metadata = {
  title: 'Profile',
  description: 'Manage your user profile, update personal information, and change your password on YourApp.',
  keywords: 'profile, user settings, personal information',
};


interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
  <ProfileHeader> {children}</ProfileHeader>
    

  );
};

export default ProfileLayout;
