import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../assets/css/params";

const SectionTable = styled.table`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
`;
const StyledTh = styled.th`
  text-transform: capitalize;
  text-align: center;
  line-height: 5;
  color: ${colors.gray7};
  font-weight: 400;
`;
const StyledTd = styled.td`
  line-height: 5;
  min-width: 5em;
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

interface BaseTableProps {
  itemStr: string;
  tableName: string;
  hasCheckBox: boolean;
  currentPage: number;
  rowsPerPage: number;
}

const BaseTable = (props: BaseTableProps) => {
  const { itemStr, tableName, hasCheckBox, currentPage, rowsPerPage } = props;
  let items = itemStr.length === 0 ? [] : JSON.parse(itemStr);
  items = items.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const keys = items[0] ? Object.getOwnPropertyNames(items[0]) : [];

  /**
   * Tabele head line
   */
  const tableTh = keys.map((key, ind) => {
    return <StyledTh key={`${tableName}-${key}-${ind}`}>{key}</StyledTh>;
  });

  /**
   * Table rows
   */
  const tableTrList = items.map((item: any, indx: number) => {
    return (
      <StyledTr
        whileHover={{ color: colors.primary, backgroundColor: colors.dark }}
        key={`table-row__${indx}`}
      >
        {/* show checkbox when hasCheckBox === true */}
        {hasCheckBox && (
          <CheckboxTd>
            <input type="checkbox" name="" id="" />
          </CheckboxTd>
        )}
        {keys.map((title, idx) => {
          return (
            <StyledTd key={`${tableName}-tr-${indx}-${title}-${idx}`}>
              {item[title]}
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
          {/* show checkbox when hasCheckBox === true */}
          {hasCheckBox && (
            <StyledTh>
              <input type="checkbox" name="" id="" />
            </StyledTh>
          )}
          {tableTh}
        </StyledTr>
      </thead>
      <tbody>{tableTrList}</tbody>
    </SectionTable>
  );
};

export default BaseTable;
