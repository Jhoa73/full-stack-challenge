import { Card } from "antd";
import styled from "styled-components";

export const ResponsiveCard = styled(Card)`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 1em;
  margin-bottom: 6em;

  @media (max-width: 991px) {
    padding: 10px;

    .ant-card-body {
      padding: 5px;
    }
  }
`;
