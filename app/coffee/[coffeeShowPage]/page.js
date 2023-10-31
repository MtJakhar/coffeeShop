import Image from "next/image";
import { Button } from "@mui/material";
export default function CoffeeShowPage() {
	return (
		<>
			<h1>Coffee Show Page</h1>
			<div className="flex">
				<Image
					src="https://lh3.googleusercontent.com/pw/ADCreHc4OwbTDac5V4cxCYbgqf1UNMwajlBjZnTXMxqwV9MleMCa31lOcUnd7D9SNq2Kq72T6Vqd6FgdesIZga9ok-uZ4ArSxwnL0MrrpcmA9eFqq6QqBak=w1920-h1080"
					width={800}
					height={800}
					alt="image of coffee"
				/>
				<div className="text-center justify-center p-7">
					<h1>Product Name</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Consequat id porta nibh venenatis cras sed
						felis eget. Netus et malesuada fames ac turpis. Ultrices
						in iaculis nunc sed. Viverra vitae congue eu consequat
						ac felis donec. Tellus in hac habitasse platea dictumst
						vestibulum rhoncus. Auctor augue mauris augue neque
						gravida in fermentum et sollicitudin. Nunc non blandit
						massa enim nec dui nunc. Faucibus ornare suspendisse sed
						nisi lacus sed viverra.
					</p>
					<Button className="m-2 bg-slate-600" variant="contained">Add to Cart</Button>
				</div>
			</div>
		</>
	);
}
