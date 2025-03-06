import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 30px 20px 20px 20px;
  margin: 10px 20px;
  border-radius: 10px;
  background-color: #fff;
  min-height: 100vh;
`;

export const CardsContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;
