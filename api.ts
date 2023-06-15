export default async function getPlanets() {
  const res = await fetch("./data.json");
  if (!res.ok) {
    throw {
      message: "Failed to fetch planets",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
}
