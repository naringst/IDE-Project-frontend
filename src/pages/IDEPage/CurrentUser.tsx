import { UserInfoType } from '../../types/user/UserTypes';
import {
  CurrentUserBox,
  RightBox,
  StyleAiOutlineComment,
  UserProfile,
} from './IDEPage.style';

const CurrentUser = () => {
  const currentUserList = [
    { id: '1', name: '지원' },
    { id: '2', name: '총미' },
  ];
  return (
    <RightBox>
      <CurrentUserBox>
        {currentUserList.map((user: UserInfoType) => {
          return <UserProfile key={user.id}>{user.name}</UserProfile>;
        })}
      </CurrentUserBox>
      <StyleAiOutlineComment />
    </RightBox>
  );
};

export default CurrentUser;
