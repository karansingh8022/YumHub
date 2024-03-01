import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";

function App() {

  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Provider>
  )
}

export default App
