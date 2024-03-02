import SearchResultProps from "../types/searchResult.types";

export async function search(query: string): Promise<SearchResultProps[]> {
  if (!query) return [];
  console.log("ebtriuasssss");
  try {
    const response = await fetch(
      `/api/data?search=${encodeURIComponent(query)}`
    );
    console.log(response);
    if (!response.ok) {
      console.error("Response not OK:", response.status, response.statusText);
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Promise<SearchResultProps[]>;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}
