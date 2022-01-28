import styled from "styled-components";
import { Button } from "antd";
import { colors } from "utils/colors";

const { primaryMarineBlue, white, black, lowGray } = colors;

const AppButton = styled(Button)`
  background-color: ${({ isPrimary = true }) =>
    isPrimary ? primaryMarineBlue : lowGray};
  border: none;
  width: 100%;
  border-radius: 0.5em;
  color: ${({ isPrimary = true }) => (isPrimary ? white : black)};

  :hover {
    border: none;
  }
  :focus {
    border: none;
  }
`;

export default AppButton;
