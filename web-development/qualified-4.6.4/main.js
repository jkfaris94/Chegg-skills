const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5001";

function bulkDelete(ids) {
    const promises = ids.map((id) => {
        const url = `${BASE_URL}/constellations/${id}`;
        return axios.delete(url).then(() => ({ id }));
    });
    return Promise.all(promises);
}

//const ids = ["KGQIwSq", "32TN5F8"];
//bulkDelete(ids)
   // .then((results) => {
   //     console.log(results);
   // })
  //  .catch((error) => {
   //     console.error("error deleting constellations", error.message);
  //  });