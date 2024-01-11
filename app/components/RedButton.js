import React from "react";

const RedButton = ({ text, click, disabled }) => {
	return (
		<>
			{!disabled ? (
				<button
					type="button"
					className="text-white py-2 px-4 w-32 shadow shadow-[#505050] hover:shadow-[#505050] rounded bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] uppercase"
					onClick={click}
				>
					{text}
				</button>
			) : (
				<button
					type="button"
					className="text-[#C0C0C0] py-2 px-4 w-32 rounded bg-[#DCDCDC] uppercase"
				>
					{text}
				</button>
			)}
		</>
	);
};

export default RedButton;
