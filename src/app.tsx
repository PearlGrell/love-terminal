import { BrowserRouter, Routes, Route } from "react-router-dom";
import LockScreen from "./screens/lock_screen";
import PageNotFound from "./screens/page_not_found";
import TerminalScreen from "./screens/terminal_screen";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LockScreen />} />
                <Route path="/lock" element={<LockScreen />} />
                <Route path="/terminal" element={<TerminalScreen />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}