import { Col, Row } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import AppButton from "components/atoms/AppButton";
import { useContext } from "react";
import { UsersPageContext } from "context/UsersPageContext";
import styled from "styled-components";
import AppTitle from "components/atoms/AppTitle";
import { UsersFilter } from "./UsersFilter";

const RowHeader = styled(Row)`
  padding: 1em 0;
`;

const TitleHeader = styled(AppTitle)`
  padding-left: 1em;
`;

export const UsersPageHeader = () => {
  const { onAdd } = useContext(UsersPageContext);

  return (
    <RowHeader gutter={12} justify="space-between">
      <Col>
        <TitleHeader level={3}>Usuarios</TitleHeader>
      </Col>
      <Col>
        <AppButton onClick={() => onAdd()}>
          <UserAddOutlined /> Agregar
        </AppButton>
      </Col>
      <Col xs={24} style={{ paddingLeft: "1em" }}>
        <UsersFilter />
      </Col>
    </RowHeader>
  );
};
