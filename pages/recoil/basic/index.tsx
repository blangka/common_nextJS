import { useRecoilState } from "recoil";
import { pageState } from "states";
import { convertPageNameToComponentName } from "utils/commonUtil";
import Link from "next/link";

const BasicPage = () => {
	const [page, setPage] = useRecoilState(pageState);

	function handleOnClick() {
		setPage(convertPageNameToComponentName("BasicPage"));
	}

	return (
		<div>
			<div>
				<h1>BasicPage</h1>
			</div>
			<div>
				<h1>{page.pageName}</h1>
			</div>
			<div>
				<button onClick={handleOnClick}>Change Page Name</button>
			</div>
			<div>
				<Link href="/recoil/sample">
					<button>sample Page 이동</button>
				</Link>
			</div>
			<hr />
		</div>
	);
};

export default BasicPage;
