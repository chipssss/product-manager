import {post} from "@/api/http";

export function apiLogin(form) {
  return post('backend/user/login.do', form);
}
