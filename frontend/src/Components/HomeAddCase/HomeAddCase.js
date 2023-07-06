import HomeSelection from "../HomeSelection/HomeSelection";

function HomeAddCase() {

    return (
        <HomeSelection title="Add A Case"
            description="Please select this option to add a crash case to the database"
            buttonLink="/addCase"
            buttonText="Continue"
        />
    )

}
export default HomeAddCase;