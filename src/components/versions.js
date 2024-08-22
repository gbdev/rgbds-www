import versions from "../../versions.json";
const latestStable = versions.find((id) => id.indexOf("-") == -1);

export { versions, latestStable };
