import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
    return (
        <div className="theme-page flex min-h-screen flex-col font-sans">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
