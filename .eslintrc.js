module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
	overrides: [],
	parserOptions: {
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		quotes: ["error", "double"], //더블 쿼터 사용
		"@typescript-eslint/consistent-type-assertions": "off", //타입 단언 사용
		"@typescript-eslint/promise-function-async": "warn", //비동기 함수에 async 사용
		"@typescript-eslint/strict-boolean-expressions": 0, //boolean 타입에 대한 불필요한 검사를 하지 않음
		"@typescript-eslint/explicit-function-return-type": "off", //함수의 반환 타입을 명시하지 않음
		"@typescript-eslint/quotes": ["error", "double"], //더블 쿼터 사용
		"no-unused-vars": "off", //사용안한 변수 경고 중복
		"spaced-comment": "off", //주석을 뒤에 쓰지 말라는 경고
		"@typescript-eslint/no-unused-vars": "warn", //사용안한 변수는 경고
		"jsx-a11y/control-has-associated-label": "off", // 상호작용하는 엘리먼트에 label을 넣는다
		"react/no-array-index-key": "off", // key값으로 index를 사용할수 있다.
		"comma-dangle": "off", // 마지막에 , 을 넣어주지 않는다.
		"arrow-body-style": "off", //화살표 함수 안에 return을 사용 할 수 있다.
		"react/no-unescaped-entities": "off", //문자열 내에서 " ' > } 허용
		"react/prop-types": "off", //proptypes를 사용하지 않는다.
		"object-curly-newline": "off", // { 다음 줄 바꿈을 강제로 사용하지 않는다.
		"react/jsx-one-expression-per-line": "off", //한라인에 여러개의 JSX를 사용 할 수 있다.
		"implicit-arrow-linebreak": "off", // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
		"no-shadow": "off", //파일 내에서 중복 이름을 사용 할 수 있다.
		"operator-linebreak": "off", //연산자 다음 줄 바꿈을 사용 할 수 있다.
		"react/react-in-jsx-scope": "off", // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
		"react/jsx-props-no-spreading": "off", //props를 스프래드 할 수 있다.
		"jsx-a11y/anchor-is-valid": "off", // next js에서는 a에 href없이 사용
		"global-require": "off", //함수 내에서 require 사용가능
		"no-use-before-define": "off", // 선언전에 사용하지 말라,
		"import/prefer-default-export": "off", //export default 권장
		"no-param-reassign": "off", //param assign 하지 않기
		"jsx-a11y/label-has-associated-control": "off",
		"no-invalid-css": "off",
		"no-confusing-arrow": "off",
		"react/jsx-curly-newline": "off",
		indent: "off",
		"react/jsx-indent": "off",
		"react/jsx-indent-props": "off",
		"react/require-default-props": "off",
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
			},
		},
	},
};
