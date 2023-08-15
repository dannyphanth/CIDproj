import HomeSelection from '../HomeSelection/HomeSelection';

function HomeListCases() {
    return (

        <HomeSelection
            title="List All Cases"
            description="Please select this option to list all existing crash cases"
            buttonLink="/listAll-search"
            buttonText="Search"
        />
    )
}
export default HomeListCases;