import { Button, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import AppBarComponent from "../../component/app-bar/AppBarComponent.jsx";

export default function ExamplesMain() {
  return (
    <Container maxWidth>
      <AppBarComponent />
      <h1>Welcome to the app!</h1>
      {/* <nav>
        <Link to="examples-pages-1">Examples page 1</Link> |{" "}
        <Link to="examples-pages-2">Examples page 2</Link>
      </nav> */}
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
}
