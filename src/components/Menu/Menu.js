const Menu = () => {
    return (
        <div className="menu">
                    <a id="logo" href="/">HJ.dev</a>
                    <ul>
                        <li><a href="/AboutMe">About Me</a></li>
                        <li><a href="/Projects">Projects</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                    <div className="sns">
                        <a href="https://github.com/coidng21"><i class="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/hai-jin-shin-7a91a3241/"><i class="fa fa-linkedin"></i></a>
                    </div>
        </div>
    )
}

export default Menu;