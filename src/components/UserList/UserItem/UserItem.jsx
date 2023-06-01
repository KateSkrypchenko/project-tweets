import AOS from 'aos';
import 'aos/dist/aos.css';

import { Items, LogoImage, HorizontalLine, ContentBox, Avatar } from './UserItem.styled';

export const UserItem = ({ id, user, tweets, followers, avatar }) => {
  AOS.init();
  const imagePath = '/images/logo.png';

  return (
    // <Items key={id} data-aos="fade-up">
    <Items key={id}>
      <LogoImage src={imagePath} alt="logo" />
      {/* <HorizontalLine /> */}
      <ContentBox>
        <Avatar
          src={
            avatar
              ? avatar
              : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
          }
          alt={user}
          loading="lazy"
        />
        <p>{tweets} tweets</p>
        <p>{followers} followers</p>
        <button>Follow</button>
      </ContentBox>
    </Items>
  );
};
