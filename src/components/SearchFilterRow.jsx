function SearchFilterRow({ toggleFilters }) {
    return (
        <div className="row">
            <div className="search">
                <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M21 21l-4-4" />
                </svg>
                <input placeholder="Search courses..." />
            </div>

            <div className="btn" id="filter-btn" onClick={toggleFilters}>
                <svg viewBox="0 0 24 24">
                    <path d="M4 6h16M10 12h4M6 18h12" />
                </svg>
                Filters
            </div>
        </div>
    );
}

export default SearchFilterRow