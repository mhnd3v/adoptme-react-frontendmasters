import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
to {
    transform: rotate(360deg);
}`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    // eslint-disable-next-line
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
      onClick={() => setPadding(padding + 15)}
    >
      <Link to="/">Adobt Me!</Link>
      <span
        css={css`
          font-size: 50px;
          animation: ${spin} 1s linear infinite;
          &:hover {
            text-decoration: underline;
            animation-duration: 5s;
          }
        `}
        role="img"
        aria-label="logo"
      >
        💩
      </span>
    </header>
  );
};

export default NavBar;
