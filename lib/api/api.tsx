import axios from "axios";

export const getPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");

export const postPosts = (userId: string) =>
	axios.post("https://jsonplaceholder.typicode.com/posts", { userId: userId });
