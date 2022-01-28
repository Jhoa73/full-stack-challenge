import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import { ResponsiveCard } from "components/atoms/ResponsiveCard";
import { BackButton } from "components/molecules/BackButton";
import { UserForm } from "components/organims/User/UserForm";
import { UserHeader } from "components/organims/User/UserHeader";
import { UserPageProvider } from "context/UserPageContext";
import styled from "styled-components";

const RowUserPage = styled(Row)`
  padding: 2em;
`;

const ColAvatar = styled(Col)`
  margin-right: 2em;
`;

export const UserPage = ({ isAdd = false }) => (
  <UserPageProvider isAdd={isAdd}>
    <BackButton />
    <ResponsiveCard>
      <RowUserPage justify="center">
        <ColAvatar xs={0} md={3} lg={2}>
          <Avatar size={64} icon={<UserOutlined />} />
        </ColAvatar>
        <Col xs={24} md={18} lg={19}>
          <Row gutter={[6, 16]} align="top" justify="space-between">
            <UserHeader />
            <Col xs={24}>
              <UserForm />
            </Col>
          </Row>
        </Col>
      </RowUserPage>
    </ResponsiveCard>
  </UserPageProvider>
);
