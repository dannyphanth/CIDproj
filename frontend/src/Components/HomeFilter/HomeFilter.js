import './HomeFilter.css';
import { Link } from 'react-router-dom';
function HomeFilter() {
    return (
        <div className='container'>
            <h2 className='title'>Search by Filters</h2>
            <p className='description'>Please Select this option to query on vehicles through filtering</p>
            <Link to="/filter-search">
                <button className='button'>Search</button>
            </Link>
        </div>
    )
}
export default HomeFilter;