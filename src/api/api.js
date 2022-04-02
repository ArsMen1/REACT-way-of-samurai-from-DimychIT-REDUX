import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a4061475-4a05-4eca-a059-880dd4b5fb86",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data); // Возвращаем не весь респонс а только необходимые коспоненте данные
  },
  follow(uId) {
    return instance.post(`follow/${uId}`, {}, {});
  },
  unfollow(uId) {
    return instance.delete(`follow/${uId}`, {});
  },
  authMe() {
    return instance.get(`auth/me`, {}); // Зачем вторым параметром обьект?
  },
};

export const profileAPI = {
  getMePage(uId) {
    return instance.get(`profile/${uId}`);
  },
  getStatus(uId) {
    return instance.get(`profile/status/${uId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};
