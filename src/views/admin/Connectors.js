import React from "react";

// components

import CardConnectors from "components/Cards/CardConnectors.js";

export default function Connectors() {
  const userData = localStorage.getItem('user');
  var authData = JSON.parse(userData);
  console.log(authData);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardConnectors />
        </div>
      </div>
    </>
  );
}
