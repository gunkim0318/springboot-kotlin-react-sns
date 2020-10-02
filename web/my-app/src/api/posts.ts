import axios from "axios";

export async function getPostsList() {
  const response = await axios.get("/api/posts/list");
  return response.data;
}
export async function createPosts(contents: string) {
  const response = await axios.post("/api/posts");

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
export async function increaseLikes(id: number) {
  const response = await axios.post("/api/posts/$id/likes");

  return response.status;
}

export interface Posts {
  contents: string;
  likes: number;
}
