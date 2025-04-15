import { AuthResponse } from "../types/auth.type";
import http from "../utils/http";
import { SuccessRespone } from "../types/utils.type";
import { User } from "../types/User/user.type";
import { clearLS, getAccessTokenFromLS } from "../utils/auth";

const authApi = {
  registerAccount(body: { email: string; password: string; username: string }) {
    return http.post<AuthResponse>("/register", body);
  },
  loginAccount(body: { email: string | null; password: string | null }) {
    return http.post<AuthResponse>("/login", body);
  },
  logout() {
    clearLS();
  },
  getProfile() {
    const token = getAccessTokenFromLS();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    return http.get<SuccessRespone<User>>(`/me`, { headers });
  },
};

export default authApi;
