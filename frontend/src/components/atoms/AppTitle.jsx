import Title from "antd/lib/typography/Title";
import { colors } from "utils/colors";

const { primaryMarineBlue } = colors;

const AppTitle = ({ color = primaryMarineBlue, ...props }) => (
  <Title style={{ color }} {...props} />
);

export default AppTitle;
