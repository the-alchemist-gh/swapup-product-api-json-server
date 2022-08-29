const items = require("./data/items");
const st = require("./data/st.json");
const brands = require("./data/brands");
const itemTypes = require("./data/itemTypes");
const swaps = require("./data/swaps.json")
const offers = require("./data/offers.json")
const users = require("./data/users.json")



module.exports = {
  items,
  st,
  brands,
  itemTypes,
  swaps,
  offers,
  users
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
