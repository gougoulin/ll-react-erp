import React from "react";
import styled from "styled-components";
import { colors } from "../assets/css/params";
import ButtonBase from "./button/ButtonBase";

interface PaginationProps {
  pages: number[];
  handleClickPage: (page: number) => void;
  handleNextPage: React.MouseEventHandler<HTMLButtonElement>;
  handlePrevPage: React.MouseEventHandler<HTMLButtonElement>;
  paginationLabel: string;
  currentPage: number;
}

const PaginationBtn = styled(ButtonBase)`
  background-color: transparent;
  color: ${colors.gray7};
  border: none;

  &:hover {
    font-weight: 500;
    color: ${colors.primary};
  }
`;

const CurrentPageBtn = styled(PaginationBtn)`
  background-color: ${colors.primary};
  color: ${colors.gray1};
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Pagination = (props: PaginationProps) => {
  const {
    pages,
    paginationLabel,
    handleClickPage,
    handleNextPage,
    handlePrevPage,
    currentPage
  } = props;

  const list =
    pages &&
    pages.map((page, idx) => {
      let ret = (
        <PaginationBtn
          onClick={() => {
            handleClickPage(page);
          }}
          key={`${paginationLabel}-${page}-${idx}`}
        >
          {page}
        </PaginationBtn>
      );
      if (page === currentPage) {
        ret = (
          <CurrentPageBtn
            onClick={() => {
              handleClickPage(page);
            }}
            key={`${paginationLabel}-${page}-${idx}`}
          >
            {page}
          </CurrentPageBtn>
        );
      }
      return ret;
    });

  return (
    <BtnGroup>
      <PaginationBtn key={`${paginationLabel}-prev`} onClick={handlePrevPage}>
        &lt;
      </PaginationBtn>
      {list}
      <PaginationBtn key={`${paginationLabel}-next`} onClick={handleNextPage}>
        &gt;
      </PaginationBtn>
    </BtnGroup>
  );
};

export default Pagination;
