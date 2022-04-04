import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const linkStyle = {
      color: match ? '#27ae60' : '#fff'
  }

  const lineStyle = {
    position: "absolute",
    height: "2px",
    bottom: 0,
    width: "100%",
    background: match ? "#27ae60" : "#ddd",
  };

  return (
    <div>
      <Link style={linkStyle} to={to} {...props}>
        {children}
      </Link>
      <div style={lineStyle} className="line"></div>
    </div>
  );
};

export default CustomLink;
