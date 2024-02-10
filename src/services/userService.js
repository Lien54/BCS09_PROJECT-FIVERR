import { https } from "./configService";

export const userService = {
  registerServ: (data) => {
    return https.post("/api/auth/signup", data);
  },
};
