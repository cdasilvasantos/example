export default function Navbar() {
    return(
        <header>
        <div class="container">
            <div class="navbar">
                <div class="navbar-brand">
                    <a href="#section0">LuxCore</a>
                </div>
                <div class="navbar-toggler" onclick="toggleNavbar()">
                    <div class="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <nav class="navbar-collapse">
                    <ul class="navbar-nav">
                        <li><a href="">Menu</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Club</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
} 
