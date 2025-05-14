import "@/components/nav/nav.css"
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react"
export const Nav = () => {

    const [menuOpened, setMenuOpened] = useState(false)

    const handleOpenMenu = () => {
        setMenuOpened(!menuOpened)
    }
    return (
        <nav>
            <div className="menu">
                <ul>
                    <li className="icon-menu"><IoMenuOutline
                        size={50}
                        color="#fff"
                        onClick={handleOpenMenu}
                    />
                    </li>
                </ul>
                <ul className={`${menuOpened ? "menu-opened" : "ul-menu"}`}>
                    <li className="item-menu"><a href="#">Sobre</a></li>
                    <li className="item-menu"><a href="#">Objetivos do projeto</a></li>
                    <li className="item-menu"><a href="#">Faça a sua parte</a></li>
                </ul>
            </div>
        </nav>
    )
}