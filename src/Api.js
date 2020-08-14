import Axios from "axios";

export default async function api(
  endpoint,
  { method = "GET", data, token } = {}
) {
  try {
    const res = await Axios({
      method: method,
      url: "http://178.62.198.162/api/" + endpoint,
      headers: {
        token: "pj11daaQRz7zUIH56B9Z",
      },
      data: {
        ...data,
      },
    });

    return res;
  } catch (e) {
    console.log(e);
  }
}
