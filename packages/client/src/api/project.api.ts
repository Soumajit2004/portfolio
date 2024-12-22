import api from "./api.ts";
import {Project} from "../types/project.type.ts";

const URL = {
  fetchHomepageProject: `/api/home-page`,
  fetchAllProjects: `/api/projects`,
}

export const fetchHomePageProjects = async () => {
  const response = await api.get(URL.fetchHomepageProject, {
    params: {
      field: "projects",
      "populate[0]": "projects",
      "populate[projects][populate][0]": "coverImage",
      "populate[projects][populate][1]": "technologies",
    }
  });
  return response.data ? response.data['data']['projects'] as Project[] : null;
}

export const fetchAllProjects = async ({pageNumber = 1}: { pageNumber: number }) => {
  const response = await api.get(URL.fetchAllProjects, {
    params: {
      "populate[0]": "coverImage",
      "populate[1]": "technologies",
      "pagination[pageSize]": 6,
      "pagination[page]": pageNumber
    }
  });
  return response.data ? {
    projects: response.data['data'] as Project[],
    pagination: response.data['meta']["pagination"]
  } : null;
}