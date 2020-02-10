const axios = require("axios");

export const getAllMPs = async () => {
  const { data } = await axios.get(
    "http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons|IsEligible=true"
  );
  return data;
};

export const getAllGovernmentMPs = async () => {
  const { data } = await axios.get(
    "http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons|IsEligible=true|holdsgovernmentpost=true"
  );
  return data;
};

export const getMpById = async id => {
  const { data } = await axios.get(
    `http://data.parliament.uk/membersdataplatform/services/mnis/members/query/id=${id}/Committees|Constituencies|Staff`
  );
  return data;
};

export const getMPImage = async memberId => {
  const { data } = await axios.get(
    `http://data.parliament.uk/membersdataplatform/services/images/MemberPhoto/${memberId}/`
  );
  return data;
};
