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
    setLoading(false);
    if (succesNofitication) {
      openNotificationWithIcon({ type: "success", message: messageSucces });
    }

  } catch (error) {
    if (errorNotification) {
      setLoading(false);
      openNotificationWithIcon({ type: "error", message: error });
    }
  }
};
