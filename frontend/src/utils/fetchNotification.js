import { notification } from "antd";

const openNotificationWithIcon = ({ type, message }) => {
  notification[type]({ message });
};

export const fecthNotification = async ({
  fetch,
  setLoading,
  succesNofitication = false,
  errorNotification = true,
  messageSucces = "Acción realizada correctamente",
}) => {
  try {
    setLoading(true);
    await fetch();
    if (succesNofitication) {
      openNotificationWithIcon({ type: "sucess", message: messageSucces });
    }
  } catch (error) {
    if (errorNotification) {
      openNotificationWithIcon({ type: "error", message: error });
    }
  } finally {
    setLoading(false);
  }
};
