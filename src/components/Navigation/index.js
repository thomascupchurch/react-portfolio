import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import { portfolioSelected, setPortfolioSelected } from "../Portfolio";

function Navigation(props) {
  const {
    directories = [],
    setCurrentDirectory,
    currentDirectory,
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
  } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="cheeseburger">
            {" "}
            🍔
          </span>{" "}
          CodeBurger!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span
              onClick={() => {
                handleClick("Contact");
                setContactSelected(true);
              }}
            >
              Contact
            </span>
          </li>
          {/* <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <span
              onClick={() => {
                handleClick("Portfolio");
                setPortfolioSelected(true);
              }}
            >
              Portfolio
            </span>
          </li> */}
          {directories.map((directory) => (
            <li
              className={`mx-1 ${
                currentDirectory.name === directory.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={directory.name}
            >
              <span
                onClick={() => {
                  setCurrentDirectory(directory);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(directory.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
