import React, { useEffect, useState } from "react";
import { getMpById, getMPImage } from "../../src/api";
import { Segment } from "semantic-ui-react";
import { formattedDate } from "../utils";

const IndividualMP = ({ id }) => {
  const [MP, setMP] = useState({});
  const [Photo, setPhoto] = useState("");

  const fetchMP = () => {
    return getMpById(id).then(data => {
      setMP(data.Members.Member);
    });
  };

  //Due a CORS error, there was no way to get the image displayed on the page.
  const fetchPhoto = () => {
    return getMPImage(id).then(datsa => {
      setPhoto(data);
    });
  };

  useEffect(() => {
    fetchMP();
    fetchPhoto();
  }, []);

  if (Object.entries(MP).length > 0) {
    return (
      <Segment>
        <div>
          <h3>{MP.DisplayAs}</h3>
          <h4>
            Last Name:
            {MP.DisplayAs.split(" ")[MP.DisplayAs.split(" ").length - 1]}
          </h4>
          <h4> Party : {MP.Party["#text"]}</h4>
          <h4>Committees: </h4>
          {MP.Committees && (
            <ul>
              {MP.Committees.Committee.map(ct => {
                return (
                  <li>
                    {ct.Name} - Start date : {formattedDate(ct.StartDate)}
                  </li>
                );
              })}
            </ul>
          )}
          {!MP.Committees && <h4>No Committies Found</h4>}
          <h4>Constituencies Held: </h4>
          {Array.isArray(MP.Constituencies.Constituency) && (
            <ul>
              {MP.Constituencies.Constituency.map(cs => {
                return (
                  <li>
                    {cs.Name} - Start date : {formattedDate(cs.StartDate)}
                  </li>
                );
              })}
            </ul>
          )}
          {Object.entries(MP.Constituencies.Constituency).length > 0 &&
            !Array.isArray(MP.Constituencies.Constituency) && (
              <ul>
                <li>
                  {MP.Constituencies.Constituency.Name} - Start Date :{" "}
                  {formattedDate(MP.Constituencies.Constituency.StartDate)}
                </li>
              </ul>
            )}
          {MP.Constituencies.length < 1 && <h4>No Constituencies held</h4>}
          <h4>Staff: </h4>
          {MP.Staffing && (
            <ul>
              {MP.Staffing.map(ct => {
                return <li>{ct.Name}</li>;
              })}
            </ul>
          )}
          {!MP.Staffing && <h4>No Staffing Found</h4>}
        </div>
        <div></div>
      </Segment>
    );
  } else return <h1>Loading!</h1>;
};
export default IndividualMP;
