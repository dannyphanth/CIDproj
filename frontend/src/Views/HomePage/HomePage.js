import Header from "../../Components/Header/Header";
import HomeFilter from "../../Components/HomeFilter/HomeFilter";
import HomeListCases from "../../Components/HomeListCases/HomeListCases";
import HomeAddCase from "../../Components/HomeAddCase/HomeAddCase";

function HomePage() {

    return (
        <>
            <Header
                title="CID Case Viewer"
            />
            <HomeFilter />
            <HomeListCases />
            <HomeAddCase />
        </>
    )

}



export default HomePage;