function FilterGrid({ show }) {
    if (!show) return null;

    return (
        <div className="grid" id="filter-grid">
            <div className="field">
                <label>Category</label>
                <div className="select">
                    <select>
                        <option>All Categories</option>
                        <option>Programming Fundamentals</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Full-Stack</option>
                        <option>Mobile Development</option>
                        <option>Blockchain & Web3</option>
                        <option>CyberSecurity</option>
                        <option>Systems Programming</option>
                        <option>Essential Skills</option>
                    </select>
                </div>
            </div>

            <div className="field">
                <label>Level</label>
                <div className="select">
                    <select>
                        <option>All Levels</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div>
            </div>

            <div className="field">
                <label>Duration</label>
                <div className="select green">
                    <select>
                        <option>All Durations</option>
                        <option>2 Months</option>
                        <option>3 Months</option>
                        <option>4 Months</option>
                        <option>4 Months + Internship</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterGrid