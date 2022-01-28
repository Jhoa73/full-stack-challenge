import { colors } from "utils/colors";

const { primaryMarineBlue } = colors;

export const AppIcon = ({
  Icon,
  color = primaryMarineBlue,
  style = {},
  ...props
}) => {
  return <Icon style={{ color, ...style }} {...props} />;
};
