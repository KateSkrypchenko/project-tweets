import styled from 'styled-components';

export const Items = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 36px;
  height: 460px;
  max-width: 380px;
  margin: 0 auto;

  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }
  }

  background-image: url('images/background.png'),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px, contain;
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: 28px, top;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 1 * 15px) / 2);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 1 * 15px) / 3);
  }
`;

export const LogoImage = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;

  background-image: url('images/logo.png');
  background-repeat: no-repeat;
`;

export const HorizontalLine = styled.div`
  position: absolute;
  top: 214px;
  width: 100%;
  height: 8px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarBox = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 202px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 62px;
  height: 62px;

  border-radius: 85.9232px;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;

  text-transform: uppercase;
`;
export const Followers = styled.p`
  margin-bottom: 16px;

  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  background-color: ${props => (props.isFollowed ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  color: #373737;
  cursor: pointer;
  border: inherit;
  text-transform: uppercase;

  transition: background-color 250ms linear, transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
