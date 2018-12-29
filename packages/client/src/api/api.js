import axios from "axios";

const getUserTimeline = async () => {
  const { data } = await axios.get(URL.concat("/user/timeline"));
  return data;
};

exports = {
  getUserTimeline
};
