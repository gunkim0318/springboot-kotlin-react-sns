import axios from "axios";

export async function getProfile(name: string) {
  const response = await axios.get<Profile>(`/api/profile/${name}`);

  return response.data;
}
export async function modifyProfile(profile: Profile) {
  await axios.put("/api/profile", profile);
}

export interface Profile {
  image: string;
  info: string;
  nickname: string;
}
