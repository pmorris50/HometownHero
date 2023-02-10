import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import WebsiteContainer from './pages/WebsiteContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <WebsiteContainer/>
      <Footer/>
    </div>
  );
}

export default App;



