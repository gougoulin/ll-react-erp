import styled from "styled-components";
import { colors } from "../../assets/css/params";
import { navMenu } from "../../router/constants";
import appIcons from "../icons";

const StyledAside = styled.aside`
  min-height: 100vh;
  background-color: ${colors.dark};
  color: ${(props: StyledAsideProps) => props.asideTextColor || colors.gray1};
  font-size: ${(props: StyledAsideProps) => props.asideFontSize || "1.6rem"};
`;

type StyledAsideProps = {
  asideFontSize?: string;
  asideTextColor?: string;
};

const createAside = (ItemNode: (props: any) => JSX.Element) => {
  return (props: any) => {
    const { menu } = props;
    const menuElems = menu.map((txt: string, idx: number) => {
      console.log(txt, appIcons[txt]);

      return (
        <ItemNode
          {...props}
          key={`aside-nav-${idx}`}
          txt={txt}
          icon={appIcons[txt]}
          to={navMenu[txt]}
        >
          {appIcons[txt]}
        </ItemNode>
      );
    });
    return (
      <StyledAside>
        <>{menuElems}</>
      </StyledAside>
    );
  };
};

export default createAside;
