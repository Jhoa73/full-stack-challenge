import { Col, Row } from "antd";
import { SearchBox } from "components/molecules/SearchBox";
import { SelectorStatus } from "components/molecules/SelectorStatus";

export const UsersFilter = () => {
  return (
    <Row gutter={[16, 8]}>
      <Col xs={24} sm={12} md={7} lg={5} xxl={3}>
        <SearchBox placeholder="Buscar por id o nombre" />
      </Col>
      <Col xs={24} sm={12} md={7} lg={5} xxl={3}>
        <SelectorStatus placeholder="Filtrar por estatus" />
      </Col>
    </Row>
  );
};
