import NavbarCollection from "../components/navbarCollection/navbarCollection";
import SearchBacklog from "../components/SearchBacklog/SearchBacklog";
import SearchResults from "../components/SearchResults/SearchResults";

const Searchpage = () => {
    return (
        <>
            <NavbarCollection />
            <SearchBacklog />
            <SearchResults />
        </>
    )
}

export default Searchpage;