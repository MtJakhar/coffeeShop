import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationControlled = ({
	currentPage,
	handleCurrentPage,
	totalPages,
}) => {
	return (
		<>
			<Stack spacing={2}>
				<Pagination
					count={totalPages}
					page={currentPage}
					onChange={handleCurrentPage}
					shape="rounded"
					size="large"
					variant="outlined"
				/>
			</Stack>
		</>
	);
};

export default PaginationControlled;
