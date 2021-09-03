import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={{ backgroundColor: 'orange' }}>
            <Link to='/Class'>Class</Link>
            <br />
            <Link to='/Functional'>Functional</Link>
        </div>
    );
}

export default Header;