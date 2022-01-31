import { useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userService from "service/UserService";
import { fecthNotification } from "utils/fetchNotification";
import { routes } from "utils/routes";

export const UsersPageContext = createContext(undefined);

const INITIAL_USER_PARAMS = {
  search: "",
  status: "",
};

export const UsersPageProvider = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userParams, setUserParams] = useState(INITIAL_USER_PARAMS);

  useEffect(() => {
    fecthNotification({
      fetch: getUsers,
      setLoading,
    });
    return;
  }, [userParams]);

  const getUsers = async () => {
    const users = await userService.findAll(userParams);
    setUsers(users);
  };

  const onChangeSearch = (search) => setUserParams({ ...userParams, search });

  const onChangeStatus = (status) => setUserParams({ ...userParams, status });

  const onAdd = () => {
    navigate(routes.userAdd);
  };

  const onDelete = async (use_id) => {
    await fecthNotification({
      fetch: async () => {
        await userService.delete(use_id);
        getUsers();
      },
      setLoading,
      succesNofitication: true,
      messageSucces: "Usuario eliminado correctamente",
    });
  };

  const onEdit = (id) => {
    navigate(routes.userEdit(id));
  };

  const contextValue = {
    loading,
    users,
    onChangeSearch,
    onChangeStatus,
    onAdd,
    onEdit,
    onDelete,
  };
  return (
    <UsersPageContext.Provider value={contextValue}>
      {children}
    </UsersPageContext.Provider>
  );
};
