import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors, space } from "../assets/css/params";
import AttendanceCard from "../components/attendance/AttendanceCard";
import BaseTable from "../components/BaseTable";
import appIcons from "../components/icons";
import Pagination from "../components/Pagination";
import { RootState } from "../redux/store";
import { MainContentLayout } from "./Dashboard";
import {
  PaginationDescription,
  PaginationSection,
  SectionHeader,
  TableSection
} from "./Tasks";

const SummarySection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${space.medium};
  justify-items: center;
`;

const Attendance = () => {
  const dataJson = useSelector((state: RootState) => state.attendance.dataList);
  const total = useSelector((state: RootState) => state.attendance.total);
  const cards = useSelector((state: RootState) => state.attendance.cards);
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

  // list components
  const cardList =
    cards &&
    cards.map((it, id) => {
      let Icon = appIcons[it[4]];
      return (
        <AttendanceCard
          key={`attendance-card-${id}`}
          icon={<Icon size={32} color={colors.primary} />}
          description={it[0]}
          thisWeek={it[1]}
          lastWeek={it[2]}
          lastWeekValue={it[3]}
        />
      );
    });

  return (
    <MainContentLayout>
      <SectionHeader>
        <SummarySection>{cardList}</SummarySection>
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
  );
};

export default Attendance;
