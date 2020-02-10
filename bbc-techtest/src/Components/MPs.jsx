import React, { useState, useEffect } from "react";
import MPCard from "./MPCard";
import { getAllMPs, getAllGovernmentMPs } from "../../src/api";

const AllMps = ({ filterValue }) => {
  const [MPs, setMps] = useState([]);

  const fetchMPs = () => {
    if (!filterValue) {
      return getAllMPs().then(data => {
        setMps(data.Members.Member);
      });
    } else {
      return getAllGovernmentMPs().then(data => {
        setMps(data.Members.Member);
      });
    }
  };

  useEffect(() => {
    fetchMPs();
  }, [MPs]);

  if (MPs.length > 0) {
    return MPs.map(mp => <MPCard mp={mp} />);
  } else {
    return <h1>Loading</h1>;
  }
};

export default AllMps;
