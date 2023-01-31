import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Main className="" />
      <Work />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
