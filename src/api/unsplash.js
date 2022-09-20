import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xPpFdR6blNCtzONgZseumnsHXWZ2DfmhWRqE5WwgU2A",
  },
});
