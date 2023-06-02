import { useState } from 'react';

import { UserItem } from './UserItem/UserItem';
import { List, Button } from './UserList.styled';

export const UserList = ({ users }) => {
  const [visibleUsers, setVisibleUsers] = useState(3);

  const handleLoadMore = () => {
    setVisibleUsers(prevState => prevState + 3);
  };

  return (
    <div>
      <List>
        {users.slice(0, visibleUsers).map(({ id, user, tweets, followers, avatar }) => (
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
      </List>
      {visibleUsers < users.length && <Button onClick={handleLoadMore}>Load More</Button>}
    </div>
  );
};
