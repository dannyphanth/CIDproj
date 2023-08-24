import { Link } from 'react-router-dom';

function HomeSelection(props) {
    const buttonStyles = {
        backgroundColor: '#485b99', // Set your desired background color
        color: '#485b99', // Set your desired text color
    };
    return (

        <div className="w-2/3 shadow-md  border border-solid-800 rounded-t-lg shadow-md my-4">
            <div className="bg-gray-500/20 flex flex-col rounded-t-lg w-full p-0 flex justify-start items-center mx-auto pt-2 border-b border-solid-800">
                <p className="font-medium text-2xl leading-tight text-gray-800">
                    {props.title}
                </p>
            </div>
            <p className="font-normal pt-4 text-lg leading-tight text-gray-800">{props.description}</p>

            <Link to={props.buttonLink}>
                <button style={buttonStyles} className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg m-2 border-0 shadow-md ring-1 ring-inset ring-gray-300">
                    {props.buttonText}
                </button>
            </Link>
        </div>


    )
}
export default HomeSelection;