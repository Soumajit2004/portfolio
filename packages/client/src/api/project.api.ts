import api from "./api.ts";
import {Project} from "../types/project.type.ts";

const URL = {
  fetchHomepageProject: `/api/home-page`,
}

export const fetchHomePageProjects = async () => {
  const response = await api.get(URL.fetchHomepageProject, {
    params: {
      field: "projects",
      "populate[0]": "projects",
      "populate[projects][populate][0]": "coverImage"
    }
  });

  return response.data ? response.data['data']['projects'] as Project[] : null;
}