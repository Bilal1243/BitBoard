import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AddMenuScreen from "./screens/AddMenuScreen";
import MenuScreen from "./screens/MenuScreen";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/addMenu" element={<AddMenuScreen />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
