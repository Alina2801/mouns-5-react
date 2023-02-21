import { Link,NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        <ul style={{display:'flex', listStyleType:'none'}}>
            <li style={{marginRight:'15px'}}>
                <NavLink 
                to="/"
                state={"hello"}
                className={({isActive})=>isActive && 'active'}
                >Главная страница</NavLink>
            </li>
            <li>
                <NavLink to="/about">О странице</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to="/portfolio">Страница портфолио</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to="/newpage">Следующая страница</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to='/users'>Страница пользователя</NavLink>
            </li>
            <li style={{marginLeft:'15px'}}>
                <NavLink to='/photo'>Фото страница</NavLink>
            </li>
        </ul>
    )
}