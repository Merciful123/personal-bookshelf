// src/components/SearchBar.js

import { Input } from "@nextui-org/react";

const SearchBar = ({ query, setQuery }) => {
  return (
      <Input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for books..."
    />
  );
};

export default SearchBar;
