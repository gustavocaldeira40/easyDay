import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BodyText, CardContainer, Title } from './style';

const FeedbackCard: React.FC = () => {
  return (
    <CardContainer>
      <CardContent>
        <Title>We would love to hear your feedback :)</Title>
        <BodyText>
          It will go take maximun of 2-3 mins and your feedback is appreciated.
        </BodyText>
      </CardContent>
    </CardContainer>
  );
};

export default FeedbackCard;
