import HomeSelection from '../HomeSelection/HomeSelection';

function HomeFilter() {
    return (
        <div>
            <HomeSelection
                title="Search by Filters"
                description="Please select this option to query on vechicles through filtering"
                buttonLink="/filter-search"
                buttonText="Search"
            />
        </div>
    )
}
export default HomeFilter;