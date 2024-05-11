import { FC } from "react"

type navbarPropsType = {
    Logo: string,
    menulist:any
}

interface navbarProps {
    navbar: navbarPropsType
}

const Navbar: FC<navbarProps> = ({navbar}) => {
    const { Logo, menulist} = navbar
    return (
        <div className='navbar'>
        <img  src={Logo} alt='loading_logo'/>
        <div className='menu-item'>
            <a href='home'>Home</a>
            <a href='home'>Our Service</a>
            <a href='home'>About us</a>
            <a href='home'>Mission</a>
        </div>
        </div>
    )
}

export default Navbar