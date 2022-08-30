import Meta from "./Meta";

const Wrapper = ({ children }) => {
	return (
		<>
			<Meta />
			{children}
		</>
	);
};

export default Wrapper;
