import { BrowserRouter} from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';


function App() {


  return (
    <BrowserRouter>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,900&family=Roboto:wght@100;300;400;500;700;900&family=Sora:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyles/>
        <div className="App">
          <Nav/>
          <AnimatedRoutes/>
          <Footer/>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
