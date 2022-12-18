import React from "react";

// Custom hook to consume the global state
import { useOutputType } from "../../AppContext";

import "./header.scss";
import Select from "./select/Select";

const Header = () => {
  const { outputType } = useOutputType();

  return (
    <header>
      <div className="header-wrapper">
        <div>
          <h1>
            CSS to &nbsp;
            <Select />
          </h1>
          <br />
        </div>
        <div>
          <p data-testid="header-message">
            Easily convert CSS text to {outputType} stylesheet objects.
          </p>
          <p>
            &copy; 2022 &nbsp; <a href="https://github.com/jerrybendy" target="_blank">Jerry Bendy</a>
            &nbsp;&nbsp;
            Forked from <a href="https://github.com/jamesgeorge007" target="_blank" rel="noopener noreferrer">
              {" "}
              James George{" "}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
