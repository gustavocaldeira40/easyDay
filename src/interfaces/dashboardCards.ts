import { IconType } from "react-icons/lib";

export interface DashboardCardProps {
  title: string;
  content: string;
  details: Array<{ label: string; value: string }>;
  Icon: IconType;
  colorIcon: string;
}