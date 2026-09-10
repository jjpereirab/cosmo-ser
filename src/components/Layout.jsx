import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div className="site">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;