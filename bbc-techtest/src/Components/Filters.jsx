import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const Filters = ({ filterFunction, filterValue }) => {
  console.log(filterValue);
  return (
    <div>
      <Button onClick={filterFunction} toggle active={filterValue}>
        Filter Current MP's
      </Button>
      <Button>Refresh</Button>
    </div>
  );
};

export default Filters;
