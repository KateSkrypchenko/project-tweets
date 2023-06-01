import AOS from 'aos';
import 'aos/dist/aos.css';

// const logo = import('images/Logo.png');
// const bcg = import('images/picture2 1.png');

// import { Items } from './UserItem.styled';

export const UserItem = ({ id, user, tweets, followers, avatar }) => {
  AOS.init();

  return (
    <li key={id} data-aos="fade-up">
      {/* <img src={logo} alt="logo" loading="lazy"></img>
      <img src={bcg} alt="bcg" loading="lazy"></img> */}
      <img
        src={
          avatar
            ? avatar
            : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
        }
        alt={user}
        loading="lazy"
      ></img>
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
      <button>Follow</button>
    </li>
  );
};
