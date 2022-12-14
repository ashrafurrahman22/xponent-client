import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>

    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/identity/:identityId" element={<Home></Home>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
