import HomeSelection from '../HomeSelection/HomeSelection';

function HomeListCases() {
    return (

        <HomeSelection
            title="Search by Case ID"
            description="Please select this option to list all existing crash cases and search by Case ID"
            buttonLink="/listAll-search"
            buttonText="Search"
        />
    )
}
export default HomeListCases;