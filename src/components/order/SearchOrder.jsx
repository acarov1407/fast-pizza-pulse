import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchOrder() {

    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="rounded-xl py-1 px-4 bg-yellow-100 focus:outline-none focus:ring-yellow-500 focus:ring focus:ring-opacity-50 w-full sm:w-56 md:focus:w-72 transition-all text-sm"
                id="query"
                name="query"
                placeholder="Search order..."
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
        </form>
    )
}

export default SearchOrder