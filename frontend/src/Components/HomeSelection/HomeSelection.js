import './HomeSelection.css';
import { Link } from 'react-router-dom';

function HomeSelection(props) {
    return (
        <div className='w-2/3 bg-blue-500/30 rounded-xl m-2 border shadow-md'>
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.description}</p>
            <Link to={props.buttonLink}>
                <button className='w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg m-2 border-0 shadow-md ring-1 ring-inset ring-gray-300'>{props.buttonText}</button>
            </Link>
        </div>
    )
}
export default HomeSelection;