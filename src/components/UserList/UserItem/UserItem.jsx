import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateUserFollowers } from 'redux/users/users-operations';
import { followingSuccess, unfollowsWarning } from 'components/Toastify/Toastify';

import {
  Items,
  LogoImage,
  HorizontalLine,
  AvatarBox,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './UserItem.styled';

export const UserItem = ({ id, user, tweets, followers, avatar }) => {
  AOS.init();

  const [followerCount, setFollowerCount] = useState(followers);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('userFollowingId')) || [];
    if (userId.includes(id)) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [id]);

  const handleClick = async () => {
    setIsFollowed(!isFollowed);
    const userId = JSON.parse(localStorage.getItem('userFollowingId')) || [];
    if (isFollowed) {
      setFollowerCount(prevState => prevState - 1);
      const removeId = userId.filter(userId => userId !== id);
      localStorage.setItem('userFollowingId', JSON.stringify(removeId));
      dispatch(updateUserFollowers({ id, followers: followerCount - 1 }));
      unfollowsWarning();
    } else {
      setFollowerCount(prevState => prevState + 1);
      localStorage.setItem('userFollowingId', JSON.stringify([...userId, id]));
      dispatch(updateUserFollowers({ id, followers: followerCount + 1 }));
      followingSuccess();
    }
  };

  return (
    <Items key={id} data-aos="fade-up">
      <LogoImage />
      <HorizontalLine />
      <AvatarBox>
        <Avatar
          src={
            avatar
              ? avatar
              : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
          }
          alt={user}
          loading="lazy"
        />
      </AvatarBox>

      <div>
        <Tweets>{tweets} tweets</Tweets>
        <Followers>
          {followerCount.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3,
          })}{' '}
          follower{followerCount !== 1 && 's'}
        </Followers>
        <Button onClick={handleClick} isFollowed={isFollowed}>
          {isFollowed ? 'Following' : 'Follow'}
        </Button>
      </div>
    </Items>
  );
};
