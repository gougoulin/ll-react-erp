import styled from "styled-components";
import SectionBase from "./SectionBase";
import SectionHeader from "./SectionHeader";
import TodoTable from "./TodoTable";

const StyledTodoSection = styled(SectionBase)`
  grid-column: 1 / span 9;
  min-height: 22em;
  overflow: auto;
`;

const ContentBox = styled.div`
  font-size: 1.6rem;
  max-width: 100%;
  height: 100%;
  padding: 0 1em;
`;

const Tab = styled.span`
  font-size: 1.6rem;
  padding: 1em;
`;

const TodoSection = () => {
  return (
    <StyledTodoSection>
      <ContentBox>
        <SectionHeader>
          <Tab>My Todos</Tab>
          <Tab>Wait for actions</Tab>
        </SectionHeader>
        <TodoTable />
      </ContentBox>
    </StyledTodoSection>
  );
};

export default TodoSection;
