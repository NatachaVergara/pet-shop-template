
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
     <AppRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
