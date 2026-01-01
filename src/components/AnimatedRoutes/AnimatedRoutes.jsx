import { Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from '../../pages/About/About';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Resources from '../../pages/Resources/Resources';


const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<About/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
                <Route path="resources" element={<Resources/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;