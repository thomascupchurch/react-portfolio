import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import About from "./components/About";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [directories] = useState([
    { name: "test", description: "test" },
    { name: "My Work", description: "some of my apps and such" },
  ]);

  const [currentDirectory, setCurrentDirectory] = useState(directories[0]);
  return (
    <div>
      <Navigation
        directories={directories}
        setCurrentDirectory={setCurrentDirectory}
        currentDirectory={currentDirectory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <Header />
      <main>
        {!contactSelected ? (
          <>
            <Project currentDirectory={currentDirectory}></Project>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
