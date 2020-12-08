import axios from "axios";

export async function getReplyList(postsId: number) {
  const response = await axios.get<Reply>(`/api/reply/${postsId}`);
  return response.data;
}
export async function modifyReply(reply: Reply) {
  const response = await axios.post("/api/reply", reply);
  return response.data;
}
export async function deleteReply(replyId: number) {
  const response = await axios.delete(`/api/reply/${replyId}`);
  return response.data;
}

export interface Reply {
  contents: string;
  name: string;
  profileImage: string;
}
