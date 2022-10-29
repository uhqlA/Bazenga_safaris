import { Component } from "react";
import "./App.css";
import Backdrop from "./Components/NavHeader/Backdrop/Backdrop";
import Navbar from "./Components/NavHeader/Navbar/Navbar";
import SideDrawer from "./Components/NavHeader/SideDrawer/SideDrawer";

class Nav extends Component {
  state = {
    SideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />

        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: "56px" }}></main>
      </div>
    );
  }
}

export default Nav;
