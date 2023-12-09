import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import NavbarLeft from "./components/Header/NavbarLeft";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
    title: "Doolite",
    description: "Doolite.com",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="doolite-app h-screen bg-slate-800">
                    <Header />
                    <div>
                        <div className="doolite-navbar">
                            <NavbarLeft />
                        </div>
                        <div className="doolite-main w-container mx-auto ">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
