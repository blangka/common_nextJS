import { useQuery } from "react-query";
import { getPosts } from "lib/api/api";

// useQuery에서 사용할 UniqueKey를 상수로 선언하고 export로 외부에 노출합니다.
// 상수로 UniqueKey를 관리할 경우 다른 컴포넌트 (or Custom Hook)에서 쉽게 참조가 가능합니다.
export const QUERY_KEY = "/posts";

// useQuery에서 사용할 `서버의 상태를 불러오는데 사용할 Promise를 반환하는 함수`
const fetcher = () => getPosts().then(({ data }) => data);
const usePostsQuery = () => {
	return useQuery(QUERY_KEY, fetcher);
};
export default usePostsQuery;
