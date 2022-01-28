import { useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "utils/routes";

const DUMMY = [
  {
    id: 1,
    email: "email@test.com",
    phone: "9991436349",
    full_name: "Nelson Jhoan Concha Canto",
    birthdate: new Date(),
    status: "PENDIENTE",
    analyst_name: "Pedro",
    card: {
      card_number: "",
      brand: "",
      cvv: "",
      pin: "",
      expiration_date: "",
    },
  },
  {
    id: 2,
    email: "email@test.com",
    phone: "9991436349",
    full_name: "Nelson Jhoan Concha Canto",
    birthdate: new Date(),
    status: "COMPLETADO",
    analyst_name: "Pedro",
    card: {
      card_number: "",
      brand: "",
      cvv: "",
      pin: "",
      expiration_date: "",
    },
  },
  {
    id: 3,
    email: "email@test.com",
    phone: "9991436349",
    full_name: "Nelson Jhoan Concha Canto",
    birthdate: new Date(),
    status: "PROCESO",
    analyst_name: "Pedro",
    card: {
      card_number: "",
      brand: "",
      cvv: "",
      pin: "",
      expiration_date: "",
    },
  },
];

export const UsersPageContext = createContext(undefined);

export const UsersPageProvider = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setUsers(DUMMY);
  };

  const onAdd = () => {
    navigate(routes.userAdd);
  };

  const onEdit = (id) => {
    navigate(routes.userEdit(id));
  };

  const contextValue = {
    loading,
    users,
    onAdd,
    onEdit,
  };
  return (
    <UsersPageContext.Provider value={contextValue}>
      {children}
    </UsersPageContext.Provider>
  );
};
