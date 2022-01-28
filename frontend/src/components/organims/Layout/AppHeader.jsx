import { Row, Col, Layout } from "antd";
import styled from "styled-components";
import BlackLogo from "assets/BlackLogo.png";
import Logo from "components/atoms/Logo";
import { colors } from "utils/colors";
import Gradient from "components/atoms/Gradient";

const { white } = colors;
const { Header } = Layout;

const ResponsiveHeader = styled(Header)`
  background: ${white};
  padding: 0;
  .ant-row {
    padding: 0 1.5em;
    width: 100%;

    @media (max-width: 991px) {
      padding: 0 1em;
    }
  }
`;

const AppHeader = () => (
  <ResponsiveHeader>
    <Gradient>
      <Row justify="center" align="middle">
        <Col>
          <a href="/">
            <Logo src={BlackLogo} />
          </a>
        </Col>
      </Row>
    </Gradient>
  </ResponsiveHeader>
);

export default AppHeader;
