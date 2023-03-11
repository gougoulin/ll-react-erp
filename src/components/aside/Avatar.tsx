import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors, regularIcons } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import { DefaultUserAvatar } from "../icons";

const AvatarImgBox = styled.div`
  border-radius: 50%;
  min-height: 4em;
  width: 4em;
  background-color: ${colors.gray9};
  display: flex;
  place-items: center;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 4em;
  opacity: 0.9;
`;

const StyledAvatar = styled(DefaultUserAvatar)`
  display: flex;
  place-content: center;
  width: 100%;
  overflow: hidden;
`;

type AvatarProps = {
  isMiniSider: boolean;
};

const Avatar = () => {
  const photoUri = useSelector((state: RootState) => state.user.photoUri);
  return (
    <AvatarImgBox>
      {photoUri === "" ? (
        <StyledAvatar size="2.5em" />
      ) : (
        <AvatarImg src={photoUri} />
      )}
    </AvatarImgBox>
  );
};

export default Avatar;
