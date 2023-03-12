import styled from "styled-components";
import ContentBox from "./ContentBox";
import SectionBase from "./SectionBase";
import SectionHeader from "./SectionHeader";
import TodoTable from "./TodoTable";

const StyledTodoSection = styled(SectionBase)`
  grid-column: 1 / span 9;
  min-height: 22em;
  overflow: auto;
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
