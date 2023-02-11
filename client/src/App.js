import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import WebsiteContainer from './pages/WebsiteContainer';
import Waiver from './components/waiver'

function App() {
  return (
    <div className="App">
      <Header/>
      <Waiver/>
      <WebsiteContainer/>
      <Footer/>
    </div>
  );
}

export default App;



