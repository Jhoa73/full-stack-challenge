import { Select } from "antd";
import { STATUS_OPTIONS } from "utils/const";

export const SelectorStatus = ({ ...props }) => {
  const options = STATUS_OPTIONS.map((option) => ({
    label: option,
    value: option,
  }));
  return <Select {...props} options={options} style={{ width: "100%" }} />;
};
