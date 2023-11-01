import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import HomePage from '../../modules/pages/home/home-page';

export function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/home" Component={HomePage} /> */}
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}