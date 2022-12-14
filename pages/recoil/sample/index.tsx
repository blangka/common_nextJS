import { useRecoilState } from "recoil";
import { pageState } from "states";
import { convertPageNameToComponentName } from "utils/commonUtil";
import Link from "next/link";

const SamplePage = () => {
	const [page, setPage] = useRecoilState(pageState);

	function handleOnClick() {
		setPage(convertPageNameToComponentName("SamplePage"));
	}

	return (
		<div>
			<div>
				<h1>SamplePage</h1>
			</div>
			<div>
				<h1>{page.pageName}</h1>
			</div>
			<div>
				<button onClick={handleOnClick}>Change Page Name</button>
			</div>
			<div>
				<Link href="/recoil/basic">
					<button>basic Page 이동</button>
				</Link>
			</div>
			<hr />
		</div>
	);
};

export default SamplePage;
