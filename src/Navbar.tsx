import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to='/' className='nav-title'>PayTracker</Link>
            <ul>
                <CustomLink to='/transactions'>Transactions</CustomLink>
                <CustomLink to='/display'>Display</CustomLink>
            </ul>
        </nav>
    )
}

interface linkProps {
    to: string,
    children: string, 
    props?: any
}

function CustomLink({to, children, props}: linkProps) {
    const resolvedPath = useResolvedPath(to); 
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    if (props == undefined) props = ''; 

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to}>{children}</Link>
        </li>
    )
}