// components/Layout.jsx
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/Layout.css"; // Asegúrate de tener este archivo para los estilos

const Layout = ({ children }) => {
  return (
    <div className="layout-background">
      <Header />
      <Container className="my-5">{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
