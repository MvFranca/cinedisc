import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../../styles/layout/layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="mainContainer">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
