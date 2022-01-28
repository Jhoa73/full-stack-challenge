import { Col } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Gradient from "components/atoms/Gradient";
import styled from "styled-components";
import { colors } from "utils/colors";

const { lowGray } = colors;

const ResponsiveFooter = styled(Footer)`
  padding: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 80px;
  color: ${lowGray};
  background: ${lowGray};
  z-index: 2;

  @media (max-width: 991px) {
    font-size: 12px;
    height: 60px;
  }
`;

export const AppFooter = () => (
  <ResponsiveFooter>
    <Gradient>
      <Col>{`© ${new Date().getFullYear()} Atrato`}</Col>
      <Col>Todos los derechos reservados</Col>
    </Gradient>
  </ResponsiveFooter>
);
