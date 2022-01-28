import { useState } from "react";
import { createContext, useEffect } from "react";
import randomCardService from "service/RandomCardService";
import { fecthNotification } from "utils/fetchNotification";

const DUMMY = {
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
};

export const UserPageContext = createContext(undefined);

export const UserPageProvider = ({ children, isAdd }) => {
  const [user, setUser] = useState();
  const [card, setCard] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fecthNotification({
      fetch: loadData,
      setLoading,
    });
  }, [isAdd]);

  const loadData = async () => {
    if (isAdd) {
      await getRandomCard();
    } else {
      await getUser();
    }
  };

  const getUser = async () => {
    setUser(DUMMY);
  };

  const getRandomCard = async () => {
    const card = await randomCardService.getCard();
    setCard(card);
  };
  const onSubmit = (user, isAdd) => {};

  const contextValue = {
    user,
    isAdd,
    loading,
    card,
    onSubmit,
  };

  return (
    <UserPageContext.Provider value={contextValue}>
      {children}
    </UserPageContext.Provider>
  );
};
