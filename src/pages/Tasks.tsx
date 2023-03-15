import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors, space } from "../assets/css/params";
import BaseTable from "../components/BaseTable";
import ButtonBase from "../components/button/ButtonBase";
import BaseInput from "../components/form/BaseInput";
import BaseSelect from "../components/form/BaseSelect";
import PageSwitchAnimationWrapper from "../components/PageSwitchAnimationWrapper";
import Pagination from "../components/Pagination";
import { RootState } from "../redux/store";
import { MainContentLayout } from "./Dashboard";

export const SectionHeader = styled.section`
  grid-column: 1 / 13;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableSection = styled.section`
  grid-column: 1 / 13;
  grid-row: 2 / 3;
  min-height: 70vh;
  background-color: ${colors.gray1};
`;

export const PaginationSection = styled.section`
  grid-column: 1 / 13;
  grid-row: 3 / 4;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: ${colors.gray1};
  align-items: center;
  min-height: 4em;
  padding: 0 2em;
`;

export const PaginationDescription = styled.span`
  color: ${colors.gray7};
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
  const dataJson = useSelector((state: RootState) => state.task.taskList);
  const total = useSelector((state: RootState) => state.task.total);
  const [currentPage, setCurrentPage] = useState(1);
  // TODO setItemsPerPage is not implemented, to be added
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const totalPages = Math.ceil(total / itemsPerPage);
  const [pagesBtn, setPagesBtn] = useState(() => {
    if (totalPages > 2) {
      return [1, 2, 3];
    }
    return new Array(totalPages).fill(1).map((it, idx) => it + idx);
  });

  // event handlers
  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage((state) => state + 1);
    }
    // choose showed page buttons
    if (
      currentPage === pagesBtn[pagesBtn.length - 1] &&
      currentPage !== totalPages
    ) {
      const nextPageBtn = new Array(3).fill(currentPage).map((_, idx) => {
        return _ + 1 + idx;
      });
      setPagesBtn(nextPageBtn);
    }
  };
  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
    if (currentPage === pagesBtn[0] && currentPage > 1) {
      const nextPageBtn = new Array(pagesBtn.length)
        .fill(currentPage)
        .map((_, idx) => {
          return _ - pagesBtn.length + idx;
        });
      setPagesBtn(nextPageBtn);
    }
  };
  const handleClickPage = (page: number): void => {
    setCurrentPage(page);
  };
  return (
    <PageSwitchAnimationWrapper>
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
            currentPage={currentPage}
            rowsPerPage={itemsPerPage}
          />
        </TableSection>
        <PaginationSection>
          <PaginationDescription>
            {currentPage} of {totalPages} pages
          </PaginationDescription>
          <Pagination
            pages={pagesBtn}
            handleClickPage={handleClickPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            paginationLabel={"task-pagination"}
            currentPage={currentPage}
          />
        </PaginationSection>
      </MainContentLayout>
    </PageSwitchAnimationWrapper>
  );
};

export default Tasks;
