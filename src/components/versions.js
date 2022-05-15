const versions = require("../../versions.json");
const latestStable = versions.find((id) => id.indexOf("-") == -1);

module.exports = { versions, latestStable };
