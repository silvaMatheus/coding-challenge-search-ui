import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface SearchFormProps {
  onSearch: (query: string) => void;
}
export default function SearchForm({ onSearch }: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex items-center  justify-between h-20 "
    >
      <div className="flex items-center divide-gray-500 divide-opacity-20 rounded-xl bg-gray-900 shadow-2xl  w-full ">
        <label htmlFor="search-input" className="sr-only">
          Search input
        </label>

        <Input
          ref={inputRef}
          type="text"
          data-testid="search-input"
          placeholder="Search ..."
          aria-label="Search query"
          className="placeholder:text-white h-12 w-full rounded-lg border-0 bg-transparent pl-5 pr-4 text-white"
        />
      </div>
      <Button
        data-testid="search-button"
        aria-label="Submit search"
        type="submit"
        className="h-12 ms-2  rounded-lg flex justify-center items-center text-sm font-medium text-white bg-gray-900
         hover:bg-gray-600  focus:outline"
      >
        Search
      </Button>
    </form>
  );
}
