import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Menu, Popconfirm } from "antd";
import { AppIcon } from "components/atoms/AppIcon";
import { AppTable } from "components/atoms/AppTable";
import MoreOptions from "components/molecules/MoreOptions";
import { UsersPageContext } from "context/UsersPageContext";
import { useContext } from "react";
import styled from "styled-components";
import { colors } from "utils/colors";

const { primaryMarineBlue } = colors;

const MenuItem = styled(Menu.Item)`
  span {
    color: ${primaryMarineBlue};
  }
`;

const getColumns = ({ onEdit = () => {}, onDelete = () => {} }) => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 70,
    },
    {
      title: "NOMBRE COMPLETO",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "TELÉFONO",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "ESTATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "ANALISTA",
      dataIndex: "analyst_name",
      key: "analyst_name",
    },
    {
      title: "OPCIONES",
      dataIndex: "id",
      key: "id",
      fixed: "right",
      width: 110,
      render: (id) => (
        <MoreOptions>
          <Menu>
            <MenuItem>
              <Button
                type="link"
                onClick={() => onEdit(id)}
                icon={<AppIcon Icon={EyeOutlined} />}
              >
                Ver
              </Button>
            </MenuItem>
            <MenuItem>
              <Popconfirm
                title="¿Segura que deseas eliminar a este usuario?"
                onConfirm={() => onDelete(id)}
                okText="Sí"
                cancelText="No"
              >
                <Button
                  type="link"
                  icon={<AppIcon Icon={DeleteOutlined} color="red" />}
                >
                  Eliminar
                </Button>
              </Popconfirm>
            </MenuItem>
          </Menu>
        </MoreOptions>
      ),
    },
  ];
};

export const UsersTable = () => {
  const { users, onEdit, onDelete, loading } = useContext(UsersPageContext);
  const columns = getColumns({ onEdit, onDelete });

  return <AppTable columns={columns} data={users} loading={loading} />;
};
