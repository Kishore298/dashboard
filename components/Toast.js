import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
  });
};