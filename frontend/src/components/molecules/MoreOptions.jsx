import { Button, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { AppIcon } from "components/atoms/AppIcon";

const MoreOptions = ({ children }) => (
  <Dropdown overlay={children} placement="bottomLeft" trigger={["click"]}>
    <Button type="link" icon={<AppIcon Icon={MoreOutlined} />} />
  </Dropdown>
);

export default MoreOptions;
