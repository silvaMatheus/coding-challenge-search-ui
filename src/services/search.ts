import SearchResultProps from "../types/searchResult.types";


//TODO: ADD Error handling
 
export async function search(query: string): Promise<SearchResultProps[]> {
  if(!query) return []  

  const response = await fetch(`/api/data?search=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json() as Promise<SearchResultProps[]>;
}