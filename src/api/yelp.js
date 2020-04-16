import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer kLBDcPSCJcvpMCfjpWN4UqCT5nqJMglJVVBbBaaWX12QCUpdWCivfm5pcsepKuDoHPSOwyBywadH4E2Xsd5J6b1Sxe07eG-l_YcQN_x5LscW2nBlkLJTYX0FZO0UXnYx"
  }
});
