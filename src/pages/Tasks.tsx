import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors, space } from "../assets/css/params";
import BaseTable from "../components/BaseTable";
import ButtonBase from "../components/button/ButtonBase";
import BaseInput from "../components/form/BaseInput";
import BaseSelect from "../components/form/BaseSelect";
import { RootState } from "../redux/store";
import { MainContentLayout } from "./Dashboard";

const SectionHeader = styled.section`
  grid-column: 1 / 13;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableSection = styled.section`
  grid-column: 1 / 13;
  grid-row: 2 / 3;
  min-height: 70vh;
  background-color: ${colors.gray1};
`;

const StyledForm = styled.form`
  font-size: 1.6rem;
  flex-basis: 60em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewTaskBtn = styled(ButtonBase)`
  /* flex: 0 1 10em; */
`;
const SearchBtn = styled(ButtonBase)`
  flex: 0 0 6em;
`;

const AreaSelectBox = styled.div`
  flex: 0 0 16em;
`;
const DeptSelectBox = styled.div`
  flex: 0 0 16em;
`;
const SearchInputBox = styled.div`
  flex: 0 0 16em;
`;

const SearchTaskInput = styled(BaseInput)`
  min-height: ${space.medium};
  box-sizing: border-box;
  background-color: ${colors.gray1};
`;

const Tasks = () => {
  const area = useSelector((state: RootState) => state.task.area);
  const dept = useSelector((state: RootState) => state.task.dept);
  const [selectedArea, setSelectedArea] = useState<string>("Select Area");
  const [selectedDept, setSelectedDept] = useState<string>("Select Dept");
  const [targetTask, setTargetTask] = useState<string>("Search task here");
  const dataJson = useSelector(
    (state: RootState) => state.task.taskList
  );
  return (
    <MainContentLayout>
      <SectionHeader>
        <NewTaskBtn>new task</NewTaskBtn>
        <StyledForm>
          <AreaSelectBox>
            <BaseSelect
              valueSelected={selectedArea}
              setValueSelected={setSelectedArea}
              options={area}
            />
          </AreaSelectBox>
          <DeptSelectBox>
            <BaseSelect
              valueSelected={selectedDept}
              setValueSelected={setSelectedDept}
              options={dept}
            />
          </DeptSelectBox>
          <SearchInputBox>
            <SearchTaskInput
              type="text"
              value={targetTask}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTargetTask(e.target.value)
              }
            />
          </SearchInputBox>
          <SearchBtn>search</SearchBtn>
        </StyledForm>
      </SectionHeader>
      <TableSection>
        <BaseTable
          itemStr={dataJson}
          tableName={"dashboard-task__table"}
          hasCheckBox={false}
        />
      </TableSection>
    </MainContentLayout>
  );
};

export default Tasks;
