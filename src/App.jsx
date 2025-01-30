import "./App.css";
import DaisyNav from './components/DaisyNav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
function App() {
  // custom navbar data 
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" }
  ];
  

  return (
    <>
      <header>
        <DaisyNav></DaisyNav>
        <NavBar routes={routes}></NavBar>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
