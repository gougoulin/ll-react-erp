import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../assets/css/params";

const AttendanceCardBox = styled.div`
  font-size: 1.6rem;
  /* min-width: 22em;
  max-width: 22em; */
  width: 100%;
  min-height: 12em;
  background: ${colors.gray1};
  box-sizing: border-box;
  padding: 1.1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const AttendanceCardSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${colors.gray7};
`;

const IconBox = styled.span`
  margin-right: 0.5em;
`

const AttendanceCardSectionCenter = styled(AttendanceCardSection)`
flex: 1 0;
  justify-content: center;
`;

const AttendanceCardSectionFoot = styled(AttendanceCardSection)`
  justify-content: space-between;
`;

const HighlightNumber = styled.span`
  font-size: 3.6rem;
  font-weight: 700;
  align-self: center;
  color: ${colors.gray12};
`;

interface AttendanceCardProps {
  icon: ReactNode;
  description: string;
  thisWeek: string;
  unit?: string;
  lastWeek: string;
  lastWeekValue: string;
}
const AttendanceCard = (props: AttendanceCardProps) => {
  const { icon, description, lastWeek, lastWeekValue, thisWeek, unit } = props;
  return (
    <AttendanceCardBox>
      <AttendanceCardSection>
        <IconBox>{icon}</IconBox>
        <span>{description}</span>
      </AttendanceCardSection>
      <AttendanceCardSectionCenter>
        <HighlightNumber>{thisWeek}</HighlightNumber>
        {unit && <span>{unit}</span>}
      </AttendanceCardSectionCenter>
      <AttendanceCardSectionFoot>
        <span>{lastWeek}</span>
        <span>{lastWeekValue}</span>
      </AttendanceCardSectionFoot>
    </AttendanceCardBox>
  );
};

export default AttendanceCard;
