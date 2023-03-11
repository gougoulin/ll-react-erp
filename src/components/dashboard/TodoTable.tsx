import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import TextButton from "../button/TextButton";

const SectionTable = styled.table`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
`;
const StyledTh = styled.th`
  text-transform: capitalize;
  text-align: center;
  line-height: 3;
  color: ${colors.gray11};
`;
const StyledTd = styled.td`
  line-height: 3;
`;
const CheckboxTd = styled(StyledTd)`
  width: 2em;
  text-align: center;
`;
const StyledTr = styled(motion.tr)`
  border-top: 1px solid ${colors.gray3};
  border-bottom: 1px solid ${colors.gray3};
  color: ${colors.gray7};

  &:last-of-type {
    border-bottom: 0;
  }
`;

const TodoTable = () => {
  const { items: itemStr } = useSelector(
    (state: RootState) => state.dashboard.todoSection
  );
  const items = itemStr.length === 0 ? [] : JSON.parse(itemStr);
  const keys = items[0] ? Object.getOwnPropertyNames(items[0]) : [];
  const tableTh = keys.map((key, ind) => {
    return <StyledTh key={`todo-table-${key}-ind`}>{key}</StyledTh>;
  });

  const tableTrList = items.map((item: any, indx: number) => {
    return (
      <StyledTr
        whileHover={{ color: colors.primary, backgroundColor: colors.dark }}
        key={`${item.employee}`}
      >
        <CheckboxTd>
          <input type="checkbox" name="" id="" />
        </CheckboxTd>
        {keys.map((title, idx) => {
          return (
            <StyledTd key={`${item.employee}-${title}-{idx}`}>
              {title === keys[keys.length - 1] ? (
                <TextButton>{item[title]}</TextButton>
              ) : (
                item[title]
              )}
            </StyledTd>
          );
        })}
      </StyledTr>
    );
  });

  return (
    <SectionTable>
      <thead>
        <StyledTr>
          <StyledTh>
            <input type="checkbox" name="" id="" />
          </StyledTh>
          {tableTh}
        </StyledTr>
      </thead>
      <tbody>{tableTrList}</tbody>
    </SectionTable>
  );
};

export default TodoTable;
