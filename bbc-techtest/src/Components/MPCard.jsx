import React from "react";
import { Segment } from "semantic-ui-react";
import { Link } from "@reach/router";

const MPCard = ({ mp }) => {
  return (
    <Segment>
      <Link to={`/MP/${mp["@Member_Id"]}`}>
        <h3>{mp.DisplayAs}</h3>
      </Link>
      <h4>
        Last Name :{" "}
        {mp.DisplayAs.split(" ")[mp.DisplayAs.split(" ").length - 1]}
      </h4>
      <h4> Party : {mp.Party["#text"]}</h4>
    </Segment>
  );
};

export default MPCard;
