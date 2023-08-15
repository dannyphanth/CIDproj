import Header from "../../Components/Header/Header";
import HomeFilter from "../../Components/HomeFilter/HomeFilter";
import HomeListCases from "../../Components/HomeListCases/HomeLIstCases";
import HomeAddCase from "../../Components/HomeAddCase/HomeAddCase";

function HomePage() {

    return (
        <div className="flex flex-col justify-center items-center">
            <Header
                title="CID Case Viewer"
            />
            <HomeFilter />
            <HomeListCases />
            <HomeAddCase />
        </div>
    )

}



export default HomePage;