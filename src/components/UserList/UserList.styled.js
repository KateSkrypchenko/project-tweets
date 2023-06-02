import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const Button = styled.button`
  margin: 15px auto;
  height: 50px;
  width: 200px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  background-color: #4d19c5;
  border-radius: 10.3108px;
  border: inherit;
  cursor: pointer;
  color: #ebd8ff;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #687bce;
  }
`;
