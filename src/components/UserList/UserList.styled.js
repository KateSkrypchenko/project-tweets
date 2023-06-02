import styled from 'styled-components';
import { BsFilterSquareFill } from 'react-icons/bs';

export const FilterBox = styled.div`
  height: 50px;
  width: 150px;
  margin: 0 0 15px auto;
`;

export const FilterBtn = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;

  align-items: center;
  color: #ebd8ff;
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

export const IconBtn = styled(BsFilterSquareFill)`
  margin-left: 10px;
`;

export const FilterList = styled.ul`
  width: 150px;
  position: absolute;
  z-index: 10;

  background-color: #8d60f5;
  border-radius: 10.3108px;
`;

export const FilterItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FilterItemBtn = styled.button`
  width: 100%;

  background-color: inherit;
  border: inherit;
  border-radius: 10.3108px;
  cursor: pointer;
  color: #ebd8ff;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #687bce;
  }
`;

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
