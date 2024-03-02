import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactNode, Suspense } from "react";
import SearchForm from "./components/Search/search-form";
import { SkeletonResults } from "./components/Search/search-result-item-skeleton";
import SearchResults from "./components/Search/search-results";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
const createWrapper = () => {
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SkeletonResults />}>{children}</Suspense>
    </QueryClientProvider>
  );
};

describe("SearchResults Component Rendering", () => {
  it("displays a search field and a search button", () => {
    const handleSearchMock = jest.fn();
    render(<SearchForm onSearch={handleSearchMock} />, {
      wrapper: createWrapper(),
    });

    const input = screen.getByLabelText("Search query");
    const searchButton = screen.getByRole("button", { name: /search/i });

    expect(searchButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("triggers search on 'Search' button click", () => {
    const handleSearchMock = jest.fn();
    render(<SearchForm onSearch={handleSearchMock} />, {
      wrapper: createWrapper(),
    });

    const searchInput = screen.getByLabelText("Search query");
    fireEvent.change(searchInput, { target: { value: "test triggers" } });

    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchButton);

    expect(handleSearchMock).toHaveBeenCalledWith("test triggers");
  });

  it("initially displays the skeleton loading state", () => {
    render(<SearchResults query="delayedQuery" />, {
      wrapper: createWrapper(),
    });

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  it("triggers search on pressing the Enter key", async () => {
    const searchQuery = "Building";
    const handleSearchMock = jest.fn();
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchForm onSearch={handleSearchMock} />
        </Suspense>
      </QueryClientProvider>
    );

    userEvent.type(
      screen.getByLabelText("Search query"),
      `${searchQuery}{enter}`
    );

    await waitFor(() =>
      expect(handleSearchMock).toHaveBeenCalledWith(searchQuery)
    );
  });

  it("displays 'No results found' when search returns no results", async () => {
    queryClient.setQueryData(["searchResults", "queryThatReturnsNothing"], []);

    render(<SearchResults query="queryThatReturnsNothing" />, {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(
        screen.getByText(/There are no results matching your query./i)
      ).toBeInTheDocument();
    });
  });

  it("displays search results after a successful search", async () => {
    const mockResults = [
      { id: 1, title: "Mock Title 1", description: "Mock Description 1" },
    ];

    queryClient.setQueryData(["searchResults", "Steps"], mockResults);

    render(<SearchResults query="Steps" />, {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      const resultItems = screen.getAllByTestId("result-item");
      expect(resultItems.length).toBeGreaterThan(0);
    });
  });
});
