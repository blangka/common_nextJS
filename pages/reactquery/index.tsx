import React from "react";

import usePostsQuery from "hooks/quires/usePostsQuery";
import usePostsMutation from "hooks/quires/usePostsMutation";

const ReactQueryPage = () => {
	// 서버에서 저장되어 있는 Post 정보를 사용하기 위한 Custom Hook
	const { data } = usePostsQuery();

	const { mutate } = usePostsMutation();

	return (
		<div>
			<button onClick={() => mutate("1")}>Create Post</button>
			<div>
				{data?.map((item) => (
					<div key={item.id}>
						<h1>{item.title}</h1>
						<p>{item.body}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReactQueryPage;
