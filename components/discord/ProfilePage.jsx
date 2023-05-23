import UserAvatar from './UserAvatar';

const ProfilePage = () => {
  const userId = '412122437954830337'; // Replace with the actual user ID

  return (
    <div>
      <h1>Profile Page</h1>
      <UserAvatar userId={userId} />
    </div>
  );
};

export default ProfilePage;