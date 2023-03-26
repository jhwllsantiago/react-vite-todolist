const SearchForm = ({ query, onSearch }) => {
  return (
    <div className="form">
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={"search todos"}
      />
      {query && <button onClick={() => onSearch("")}>Reset</button>}
    </div>
  );
};

export default SearchForm;
