import api from "./api.ts";
import {Technology} from "../types/technology.type.ts";

const URL = {
  aboutMe: "/about-page",
  homePage: "/home-page",
}

export const fetchAboutMeContent = async () => {
  const response = await api.get(URL.aboutMe);
  return response.data ? response.data['data']['content'] as string : null;
}

export const fetchHomepageTechnologies = async () => {
  const response = await api.get(URL.homePage, {
    params: {
      "populate[0]": "technologies",
      "populate[1]": "technologies.icon",
      _limit: 10
    }
  });
  return response.data ? response.data['data']["technologies"] as Technology[] : null;
}