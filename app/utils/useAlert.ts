import { useCallback, useState } from "react";
import { AlertWindowProps } from "../AlertWindow";

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertWindowProps>({
    visible: false,
    type: "success",
    text: "",
    title: "",
    onClose: () => null,
  });

  const openAlert = useCallback(
    (params: Pick<AlertWindowProps, "type" | "title" | "text">) =>
      setAlert({
        ...params,
        onClose: () =>
          setAlert({ ...params, onClose: () => null, visible: false }),
        visible: true,
      }),
    []
  );

  return { openAlert, alert };
};
