import axios from "axios";

export async function createPosts(contents: string) {
  return await axios.post("https://api.github.com/users/${username}");
}
