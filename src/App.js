import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import About from "./components/About";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [directories] = useState([
    { name: "Portfolio", description: "some of my apps and such" },
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
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Navigation>
      <Header />
      <main>
        {!contactSelected && !portfolioSelected ? (
          <>
            <Portfolio currentDirectory={currentDirectory}></Portfolio>
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
