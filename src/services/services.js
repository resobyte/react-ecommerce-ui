import axios from "axios";

export default axios.create({
  baseURL: "https://node-ecommerce-bff.herokuapp.com/",
});
