import './UserAvatar.css';

import { User } from '../../../types';

const UserAvatar = ({ user }: { user: User }) => {
  const { name, available } = user;
  const nameParts = name.split(' ');
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : '';
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : '';

  return (
    <div className="userImage">
      {firstNameInitial}
      {lastNameInitial}
      <div
        className="userAvailable"
        style={{ backgroundColor: available ? 'orange' : 'grey' }}
      ></div>
    </div>
  );
};

export default UserAvatar;
