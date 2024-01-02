import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from './routes';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {routes.map((route) => {
                        return <Route key={route.path} path={route.path} element={<route.component />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
