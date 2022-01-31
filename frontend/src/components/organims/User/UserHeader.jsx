import { DownOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row } from "antd";
import AppButton from "components/atoms/AppButton";
import AppTitle from "components/atoms/AppTitle";
import { UserPageContext } from "context/UserPageContext";
import { useContext } from "react";
import { When } from "react-if";
import styled from "styled-components";
import { colors } from "utils/colors";
import { STATUS_OPTIONS } from "utils/const";

const { gray } = colors;

const ColTitle = styled(Col)`
  text-align: start;
`;

export const UserHeader = () => {
  const { user, loading, onUdateStatus } = useContext(UserPageContext);
  const { id, full_name } = user ?? {};

  const menu = () => (
    <Menu onClick={({ key }) => onUdateStatus(key)}>
      {STATUS_OPTIONS.map((option) => (
        <Menu.Item key={option} disabled={option === user?.status}>
          {option}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Col xs={18} lg={16}>
        <Row align="middle">
          <ColTitle xs={24}>
            <AppTitle level={4}>{user ? full_name : "Nuevo usuario"}</AppTitle>
          </ColTitle>
          <When condition={!!user}>
            <ColTitle xs={24}>
              <AppTitle level={5} color={gray}>
                ID: {id}
              </AppTitle>
            </ColTitle>
          </When>
        </Row>
      </Col>
      <When condition={!!user}>
        <Col>
          <Dropdown overlay={menu}>
            <AppButton loading={loading}>
              Estatus <DownOutlined />
            </AppButton>
          </Dropdown>
        </Col>
      </When>
    </>
  );
};
