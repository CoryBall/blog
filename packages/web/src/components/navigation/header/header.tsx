import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector, useAppDispatch } from '@blog/state';
import { logOutUser } from '@blog/state/user'

const Header: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [selectedRoute, setSelectedRoute] = React.useState<number>(0);
    const [menuExpanded, setMenuExpanded] = React.useState<boolean>(false);
    const [userMenuExpanded, setUserMenuExpanded] = React.useState<boolean>(false);

    const isAuthed = useAppSelector((state) => state.users.isAuthenticated);
    const user = useAppSelector((state) => state.users.user);

    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}`;

    const links: {index: number, text: string, href: string}[] = [
        { index: 1, text: 'Home', href: '/'},
        { index: 2, text: 'My Posts', href: '#'},
        { index: 3, text: 'Create', href: '#'}
    ]

    React.useEffect(() => {
        const currentPath = router.pathname;
        switch(currentPath){
            case '/':
                setSelectedRoute(1);
                break;
            default:
                setSelectedRoute(1);
                break;
        }
    }, [])

    // function logout(): void {
    //     dispatch(logOutUser())
    // }

    return (
        <nav className="header">
            <div className="container">
                {/* Mobile menu button */}
                <div className="sm:hidden" onClick={() => {setMenuExpanded(!menuExpanded)}}>
                    <button type="button" className="icon-button relative" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true" aria-controls="mobile-menu">
                        <span className="sr-only">Open main menu</span>
                        {
                            menuExpanded ? 
                            (
                                <FontAwesomeIcon className="text-secondary" icon={faTimes} />
                            ) : (
                                <FontAwesomeIcon className="text-secondary" icon={faBars} />
                            )
                        }
                    </button>
                    {menuExpanded && (
                        <div className="mobile-menu" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabIndex={-1}>
                            <h1 className="title">Menu</h1>
                            {links.map((link) => (
                            <a key={link.index} href={link.href} className={"link "+ (selectedRoute === link.index ? 'current' : 'new')} aria-current="page">{link.text}</a>
                            ))}
                        </div>
                    )}
                </div>
                {/* Logo */}
                <div className="flex items-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-light font-serif text-4xl">CBlog</a>
                    </div>
                </div>
                {/* Desktop Links */}
                <div className="hidden sm:flex space-x-4">
                    {links.map((link) => (
                        <a key={link.index} href={link.href} className={"link "+ (selectedRoute === link.index ? 'current' : 'new')} aria-current="page">{link.text}</a>
                    ))}
                </div>
                {/* Right Menu */}
                <div className="flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" className="icon-button">
                        <span className="sr-only">View notifications</span>
                        <FontAwesomeIcon className="text-secondary" icon={faSearch} />
                    </button>
                    {/* Profile dropdown */}
                    <div className="ml-3"> 
                    {isAuthed ? (
                        <>
                            <button type="button" className="icon-button" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => {setUserMenuExpanded(!userMenuExpanded)}}>
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={user?.image} alt="Github Avatar" />
                            </button>
                            {userMenuExpanded && (
                                <div className="profile" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                    {/* Active: "bg-gray-100", Not Active: "" */}
                                    <a href="#" className="link" role="menuitem"  id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="link" role="menuitem" id="user-menu-item-1">Settings</a>
                                    <a href="javascript:;" onClick={() => {dispatch(logOutUser())}} className="link" role="menuitem" id="user-menu-item-2">Sign out</a>
                                </div>
                            )}
                        </>
                    ) : (
                        <a href={githubUrl} className="icon-button">
                            <span className="sr-only">Log in</span>
                            <FontAwesomeIcon className="text-secondary" icon={faUserPlus} />
                        </a>
                    )}
                        
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;