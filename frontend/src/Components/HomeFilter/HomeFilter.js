// import './HomeFilter.css';
import HomeSelection from '../HomeSelection/HomeSelection';
import { Link } from 'react-router-dom';

function HomeFilter() {
    return (
        // <div className='container'>
        //     <h2 className='title'>Search by Filters</h2>
        //     <p className='description'>Please Select this option to query on vehicles through filtering</p>
        //     <Link to="/filter-search">
        //         <button className='button'>Search</button>
        //     </Link>
        // </div>

        <div>
            <HomeSelection
                title="Search by Filters"
                description="Please select this option to query on vechicles through filtering"
                buttonLink="/filter-search"
                buttonText="Search"
            />
        </div>
    )
}
export default HomeFilter;