import { Layout } from "antd";
import styled from "styled-components";
import { colors } from "utils/colors";
import { AppFooter } from "./AppFooter";
import AppHeader from "./AppHeader";

const { lowGray } = colors;

const ResponsiveLayout = styled(Layout)`
  background: ${lowGray};
  padding: 2em 6em;

  @media (min-width: 1440px) {
    padding: 3em 10em;
  }

  @media (min-width: 1800px) {
    padding: 3em 15em;
  }

  @media (max-width: 991px) {
    padding: 2em 3em;
  }

  @media (max-width: 520px) {
    padding: 1em 0.5em;
  }
`;

const ContentLayout = styled(Layout)`
  margin: 0;
  padding: 0;
  min-height: 60em;
  background: ${lowGray};

  @media (max-width: 520px) {
    min-height: 40em;
  }
`;

const MainLayout = ({ children }) => (
  <>
    <AppHeader />
    <ResponsiveLayout theme="light">
      <ContentLayout>{children}</ContentLayout>
    </ResponsiveLayout>
    <AppFooter />
  </>
);

export default MainLayout;
