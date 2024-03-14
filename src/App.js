import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cardcontainer from './components/CardContainer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div class="">
    <Header/>
    <Home/>
    <Cardcontainer/>
    <ToastContainer position='top-right' />
    </div>
  );
}

export default App;