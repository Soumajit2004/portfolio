import api from "./api.ts";
import {Technology} from "../types/technology.type.ts";

const URL = {
  technologies: "/technologies",
}

export const fetchAllTechnologies = async () => {
  const response = await api.get(URL.technologies, {
    params: {
      "populate[0]": "icon"
    }
  });
  return response.data ? response.data['data'] as Technology[] : null;
}