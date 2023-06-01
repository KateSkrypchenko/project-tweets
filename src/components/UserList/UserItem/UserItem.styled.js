import styled from 'styled-components';

export const Items = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 3vw;
  padding: 36px;

  background-image: url('images/picture2 1.png'),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: 28px, top;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  width: 380px;
  height: 460px;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

// export const HorizontalLine = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 0;
//   right: 0;
//   background-color: #ebd8ff;
//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
//     inset 0px 3.43693px 2.5777px #fbf8ff;
//   height: 8px;
// `;

export const ContentBox = styled.div`
  border-top: 8px solid #ebd8ff;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
`;
