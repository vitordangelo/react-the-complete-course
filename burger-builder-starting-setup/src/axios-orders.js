import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-max-e3d19.firebaseio.com/",
});

export default instance;
