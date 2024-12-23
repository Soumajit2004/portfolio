import api from "./api.ts";

const URL = {
  aboutMe: "/about-page"
}

export const fetchAboutMeContent = async () => {
 const response = await api.get(URL.aboutMe);
 return response.data ? response.data['data']['content'] as string : null;
}