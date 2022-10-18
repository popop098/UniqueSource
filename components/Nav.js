import {Navbar} from "flowbite-react";
import Image from "next/image";
const Nav = () => {
    return(
        <Navbar fluid>
            <Navbar.Brand href="/">
                <Image src={'/uslogo.png'} width={50} height={50} alt="logo" loading={'lazy'}/>
                <span className="text-black self-center whitespace-nowrap text-xl font-semibold">UniqueSource</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Nav;
