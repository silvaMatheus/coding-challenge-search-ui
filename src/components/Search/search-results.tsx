import { useSuspenseQuery } from "@tanstack/react-query";
import { search } from "../../services/search";
import SearchResultProps from "../../types/searchResult.types";
import { ScrollArea } from "../ui/scrol-area";
import SearchResultItem from "./search-result-item";

const SearchResults = ({ query }: { query: string }) => {
  const { data: results, isLoading } = useSuspenseQuery<SearchResultProps[]>({
    queryKey: ["searchResults", query],
    queryFn: () => search(query),
  });

  return (
    <ScrollArea
      className={`h-${results ? "3/6" : "none"} backdrop-blur-sm`}
      aria-busy={isLoading}
    >
      <div className="space-y-3 pt-5">
        {results && results.length > 0 ? (
          results?.map((result) => (
            <SearchResultItem key={result.id} result={result} />
          ))
        ) : (
          <p data-testid="no-results">
            There are no results matching your query.
          </p>
        )}
      </div>
    </ScrollArea>
  );
};

export default SearchResults;
