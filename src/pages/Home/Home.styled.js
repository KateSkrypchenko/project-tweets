import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px;

  font-size: 15px;
  text-align: center;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    padding: 35px 15px;

    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto 15px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  background-color: #4d19c5;
  border-radius: 10.3108px;
  border: inherit;
  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #687bce;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 10px 30px;

  color: #ebd8ff;
`;

export const Icon = styled(BsFillArrowRightCircleFill)`
  margin-left: 10px;
`;
