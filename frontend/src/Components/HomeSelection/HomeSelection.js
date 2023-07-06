import './HomeSelection.css';
import { Link } from 'react-router-dom';

function HomeSelection(props) {
    return (
        <div className='container'>
            <h2 className='titlle'>{props.title}</h2>
            <p className='description'>{props.description}</p>
            <Link to={props.buttonLink}>
                <button className='button'>{props.buttonText}</button>
            </Link>
        </div>
    )
}
export default HomeSelection;