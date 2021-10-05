import React from "react";
import Cookie from "./Cookie";

export default function CookiesList(props) {
  let cookiesArray = props.cookies.map((element) => <Cookie info={element} />);

  return <div className="cookie-list">{cookiesArray}</div>;
}
