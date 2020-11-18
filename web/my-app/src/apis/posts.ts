import axios from "axios";

export async function getPostsList() {
  const response = await axios.get<Posts[]>("/api/posts/list");
  return response.data;
}
export async function createPosts(contents: string) {
  const response = await axios.post("/api/posts", { contents: contents });

  return response.status;
}
export async function deletePosts(id: number) {
  const response = await axios.delete("/api/posts/$id");

  return response.status;
}
export async function modifiedPosts(id: number, contents: number) {
  const response = await axios.put("/api/posts/");

  return response.status;
}
export async function increasePostsLikes(id: number) {
  const response = await axios.post<string>(`/api/posts/likes/${id}`);
  return response.data;
}

export interface Posts {
  id: number;
  contents: string;
  likeCnt: number;
  isLikes: boolean;
  name: string;
  creDate: string;
}
