/*
This is part of LaunchCode Liftoff class for front-end development.
Uses React, Apollo  and GraphQL. Styling by Bootswatch theme.
Uses open Source REST API for rocket, core, capsule, pad, and launch data 
from https://docs.spacexdata.com
Created by Radhakrishnan Pillai for LaunchCode Liftoff
*/


import React from 'react';

export default function MissionKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success" /> = Success
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Fail
      </p>
    </div>
  );
}
