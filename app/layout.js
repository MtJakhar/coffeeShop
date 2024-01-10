import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AuthContext from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";

const roboto = Roboto({
	style: ["normal", "italic"],
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	display: "swap",
});

export const metadata = {
	title: "Coffee App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<AuthContext>
					<CartContextProvider>
						<main>
							<NavBar />
							{children}
							<Footer />
						</main>
					</CartContextProvider>
				</AuthContext>
			</body>
		</html>
	);
}
