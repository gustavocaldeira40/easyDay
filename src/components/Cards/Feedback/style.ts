// FeedbackCard.styles.ts
import styled from 'styled-components';

export const CardContainer = styled.div`
  background: linear-gradient(to bottom, #e0e0e0, #ffffff);  // Gradiente do cinza para o branco
  border-radius: 12px;  // Borda arredondada
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Sombra suave para destaque
  padding: 16px;
  width: 100%;
  /* max-width: 400px; */
  margin: auto;
`;

export const Title = styled.h6`
  color: #333;
  font-size: 1.25rem;
`;

export const BodyText = styled.p`
  color: #555;
  margin-top: 8px;
  font-size: 1rem;
`;
