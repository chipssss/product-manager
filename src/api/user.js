import {post} from "@/api/http";

export function login(username, password) {
  return post('backend/user/login.do', {
    username: username,
    password: password
  });
}
