import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Logo from './Logo.tsx'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-title'>
                <Link to='/'><span style={{display: 'flex'}}><Logo /></span>paytrack</Link>
            </div>
            <ul>
                <CustomLink to='/transactions'>transactions</CustomLink>
                <CustomLink to='/display'>display</CustomLink>
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
            <Link className='nav-link' to={to}>{children}</Link>
        </li>
    )
}