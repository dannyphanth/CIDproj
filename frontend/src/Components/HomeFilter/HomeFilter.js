import HomeSelection from '../HomeSelection/HomeSelection';

function HomeFilter() {
    return (

        <HomeSelection
            title="Search by Filters"
            description="Please select this option to query on vechicles through filtering"
            buttonLink="/filter-search"
            buttonText="Search"
        />

    )
}
export default HomeFilter;