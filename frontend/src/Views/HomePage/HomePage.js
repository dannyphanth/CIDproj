import Header from "../../Components/Header/Header";
import HomeFilter from "../../Components/HomeFilter/HomeFilter";
import HomeListCases from "../../Components/HomeListCases/HomeLIstCases";
import HomeAddCase from "../../Components/HomeAddCase/HomeAddCase";

function HomePage() {

    return (
        <>
            <div className="bg-gray-100">
                <div className="flex justify-center items-center">
                    <Header
                        title="CID Case Viewer"
                    />
                </div>
                <div className="min-h-screen p-6 bg-gray-100 ">
                    <div className="container max-w-screen-lg md:p-4 mb-6 bg-white shadow-lg rounded flex-col mx-auto flex items-center justify-center">
                        <HomeFilter />
                        <HomeListCases />
                        <HomeAddCase />
                    </div>
                </div>
            </div>
        </>



    )

}



export default HomePage;