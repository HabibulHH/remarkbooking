import "./styles.css";
function SearchBar() {
  return (
    <section id="searchBar">
      <div className="container bg-img py-3">
        <div className="title-texts">
          <h2>Resorts</h2>
          <p>
            Treat yourself! Your dream resort stay is just a few clicks away.
          </p>
        </div>
        <form action="javascript:" className="filter">
          <div className="search-input">
            <i className="fas fa-search" />
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="date-range" />
          <div className="room-select" />
          <div className="search-button">
            <button>Search</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
