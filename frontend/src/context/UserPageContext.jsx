import { useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import randomCardService from "service/RandomCardService";
import userService from "service/UserService";
import { fecthNotification } from "utils/fetchNotification";
import { routes } from "utils/routes";

export const UserPageContext = createContext(undefined);

export const UserPageProvider = ({ children, isAdd }) => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const [user, setUser] = useState();
  const [card, setCard] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fecthNotification({
      fetch: loadData,
      setLoading,
    });
    return;
  }, [isAdd]);

  const loadData = async () => {
    if (isAdd) {
      await getRandomCard();
    } else {
      await getUser();
    }
  };

  const getUser = async () => {
    const user = await userService.findOne(user_id);
    setUser(user);
  };

  const getRandomCard = async () => {
    const card = await randomCardService.getCard();
    setCard(card);
  };

  const onSubmit = async (user) => {
    const message = `Usuario ${isAdd ? "Creado" : "Editado"} correctamente`;

    await fecthNotification({
      fetch: async () => {
        if (isAdd) {
          const { user: newUser } = await userService.create(user);
          navigate(routes.userEdit(newUser.id), { replace: true });
        } else {
          await userService.update(user_id, user);
          await getUser();
        }
      },
      setLoading,
      succesNofitication: true,
      messageSucces: message,
    });
  };

  const onUdateStatus = async (status) => {
    const message = `Estatus actualizado a ${status}`;

    await fecthNotification({
      fetch: async () => {
        await userService.update(user_id, { status });
        await getUser();
      },
      setLoading,
      succesNofitication: true,
      messageSucces: message,
    });
  };

  const contextValue = {
    user,
    isAdd,
    loading,
    card,
    onSubmit,
    onUdateStatus,
  };

  return (
    <UserPageContext.Provider value={contextValue}>
      {children}
    </UserPageContext.Provider>
  );
};
