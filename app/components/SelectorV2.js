import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SelectorV2 = ({ itemQuant, handleChange }) => {
	const handleAdd = () => {
		if (itemQuant >= 20) {
			handleChange(20);
		} else {
			handleChange(itemQuant + 1);
		}
	};

	const handleSubtract = () => {
		if (itemQuant <= 1) {
			handleChange(1);
		} else {
			handleChange(itemQuant - 1);
		}
	};

	return (
		<>
			<div className="mb-9">
				<label className="text-xl" for="itemQuant">
					QUANTITY
				</label>
				<div
					className="flex h-[66px] justify-around items-center bg-white rounded"
					name="itemQuant"
				>
					<div
						className="text-black h-full w-1/3 rounded-l relative hover:bg-[#F5F5F5] hover:shadow-inner"
						onClick={handleSubtract}
					>
						<RemoveIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
					</div>
					<div className="text-black px-7 w-1/3 text-center text-xl">
						{itemQuant}
					</div>
					<div
						className="text-black h-full w-1/3 rounded-r relative hover:bg-[#F5F5F5] hover:shadow-inner"
						onClick={handleAdd}
					>
						<AddIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
					</div>
				</div>
			</div>
		</>
	);
};

export default SelectorV2;
