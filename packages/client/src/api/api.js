import axios from "axios";
import { URL } from "./api.const";

const getUserTimeline = async () => {
  const { data } = await axios.get(URL + "/user/timeline?start=2014&end=2019");
  return data;
};

export { getUserTimeline };
