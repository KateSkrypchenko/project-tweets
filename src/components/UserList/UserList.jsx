import { UserItem } from './UserItem/UserItem';
import { List } from './UserList.styled';

export const UserList = ({ users }) => {
  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <UserItem
          key={id}
          id={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          loading="lazy"
        />
      ))}
      <button>Load More</button>
    </List>
  );
};
