import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { AppIcon } from "components/atoms/AppIcon";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/colors";

const { primaryMarineBlue } = colors;

const ButtonHead = styled(Button)`
  padding: 0.5em 1em;
  width: fit-content;
  color: ${primaryMarineBlue};
`;

export const BackButton = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  return (
    <ButtonHead
      type="link"
      onClick={onBack}
      icon={<AppIcon Icon={ArrowLeftOutlined} />}
    >
      Atrás
    </ButtonHead>
  );
};
