import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SearchForm from "../../components/Search/search-form";
import { SkeletonResults } from "../../components/Search/search-result-item-skeleton";
import SearchResults from "../../components/Search/search-results";
import { Button } from "../../components/ui/button";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

const SearchContainer: React.FC = () => {
  const isFirst = useIsFirstRender();
  const [query, setQuery] = useState<string>("");

  return (
    <div className=" w-screen max-w-[40vw]">
      <SearchForm onSearch={setQuery} />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div>
                There was an error!
                <Button onClick={() => resetErrorBoundary()}>Try again</Button>
              </div>
            )}
          >
            {!isFirst && (
              <Suspense fallback={<SkeletonResults />}>
                <SearchResults query={query} />
              </Suspense>
            )}
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
};

export default SearchContainer;
