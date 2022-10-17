import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getPosts } from "lib/api/api";

const ReactQueryPage = () => {
	const { status, data } = useQuery("getPosts", () => getPosts().then((res) => res.data));

	useEffect(() => {
		console.log("data", data);
	}, []);

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "error") {
		return <div>Error</div>;
	}

	return (
		<div>
			{data?.id} {data?.title}
		</div>
	);
};

export default ReactQueryPage;
