import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4vw;
  height: 100vh;
  background-color: #fff;

  border-radius: 0 20px 20px 0;

  /* margin-right: 3vw; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const MenuItem = styled(IconButton)``;
