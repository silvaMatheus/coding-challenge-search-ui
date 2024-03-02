import SearchResultProps from "../../types/searchResult.types";
import { Badge } from "../ui/badge";

interface SearchResultItemProps {
  result: SearchResultProps;
}
export default function SearchResultItem({ result }: SearchResultItemProps) {
  return (
    <div
      className="bg-gray-900 group relative  items-center gap-x-6 rounded-lg 
    p-4 text-sm leading-6 "
      data-testid="search-result"
    >
      <div className="flex gap-5">
        <a
          href={result.url}
          target="_blank"
          id="search-result-title"
          data-testid="search-result-title"
          className="block font-semibold text-white"
          rel="noopener noreferrer"
          aria-label={`Read more about ${result.title}`}
        >
          {result.title}
          <span className="absolute inset-0" />
        </a>
        <Badge
          data-testid="search-result-type"
          className="bg-white text-gray-600"
        >
          {result.category}
        </Badge>
      </div>

      <p className="mt-1 text-gray-600" data-testid="search-result-description">
        {result.description}
      </p>
    </div>
  );
}
