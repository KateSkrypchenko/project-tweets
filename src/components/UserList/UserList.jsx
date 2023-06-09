import { useState, useMemo } from 'react';

import { UserItem } from './UserItem/UserItem';
import {
  FilterBox,
  FilterBtn,
  IconBtn,
  FilterList,
  FilterItem,
  FilterItemBtn,
  List,
  Button,
} from './UserList.styled';

export const UserList = ({ users }) => {
  const [visibleUsers, setVisibleUsers] = useState(3);
  const [filter, setFilter] = useState('show all');
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterMenuToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterChoose = event => {
    setFilter(event.target.value);
    setFilterOpen(false);
  };

  const handleLoadMore = () => {
    setVisibleUsers(prevState => prevState + 3);
  };

  const filteredUsers = useMemo(() => {
    switch (filter) {
      case 'show all':
        return users;
      case 'follow':
        return users.filter(({ id }) => {
          const userFollowing = JSON.parse(localStorage.getItem('userFollowingId')) || [];
          return !userFollowing.includes(id);
        });
      case 'followings':
        return users.filter(({ id }) => {
          const userFollowing = JSON.parse(localStorage.getItem('userFollowingId')) || [];
          return userFollowing.includes(id);
        });
      default:
        return users;
    }
  }, [filter, users]);

  return (
    <div>
      <FilterBox>
        <FilterBtn onClick={handleFilterMenuToggle}>
          Filter
          <IconBtn />
        </FilterBtn>
        {filterOpen && (
          <FilterList onClick={handleFilterChoose}>
            <FilterItem>
              <FilterItemBtn value="show all">Show All</FilterItemBtn>
            </FilterItem>
            <FilterItem>
              <FilterItemBtn value="follow">Follow</FilterItemBtn>
            </FilterItem>
            <FilterItem>
              <FilterItemBtn value="followings">Followings</FilterItemBtn>
            </FilterItem>
          </FilterList>
        )}
      </FilterBox>

      <List>
        {filteredUsers.slice(0, visibleUsers).map(({ id, user, tweets, followers, avatar }) => (
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
      {visibleUsers < filteredUsers.length && <Button onClick={handleLoadMore}>Load More</Button>}
    </div>
  );
};
