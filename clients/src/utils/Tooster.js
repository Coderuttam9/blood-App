import { toast } from "react-toastify";

// create tostify
export const createToster = (message, type = "error") => {
  toast[type](message);
};
