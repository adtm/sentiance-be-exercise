import axios from "axios";
import { URL } from "./api.const";

const getUserTimeline = async ({ start, end }) => {
  const { data } = await axios.get(URL + "/user/timeline?" + `start=${start}&end=${end}`);
  return data;
};

export { getUserTimeline };
