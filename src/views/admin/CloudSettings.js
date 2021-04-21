import React from "react";

// components

import CardCloudSettings from "components/Cards/CardCloudSettings.js";

export default function CloudSettings() {
  const userData = localStorage.getItem('user');
  var authData = JSON.parse(userData);
  console.log(authData);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardCloudSettings />
        </div>
      </div>
    </>
  );
}
