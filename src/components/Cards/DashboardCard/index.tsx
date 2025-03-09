import React, { memo } from 'react';
import { CardContainer, CardTitle, CardContent, CardDetails, DetailLabel, ContainerTitle } from './style';
import { IconType } from 'react-icons/lib';
import { DashboardCardProps } from '../../../interfaces/dashboardCards';



const DashboardCard: React.FC<DashboardCardProps> = memo(({ title, content, details, Icon, colorIcon, ...props }) => {
  return (
    <CardContainer {...props}>
      <ContainerTitle>
        <CardTitle>{title}</CardTitle>
        <Icon size={24} color={colorIcon} />
      </ContainerTitle>
      <CardContent>{content}</CardContent>
      <CardDetails>
        {details.map((detail, index) => (
          <div key={index}>
            <DetailLabel>{detail.label}</DetailLabel>
            <p>{detail.value}</p>
          </div>
        ))}
      </CardDetails>
    </CardContainer>
  );
});

export default DashboardCard;
