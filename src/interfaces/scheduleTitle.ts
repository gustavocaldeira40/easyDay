import { Dayjs } from "dayjs";

export interface ScheduleTitleProps {
  currentDate: Dayjs; 
  selectedFilter: string; 
  onFilterChange: (filter: string) => void; 

}