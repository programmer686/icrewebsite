import Link from "next/link"
import logo from "./logo.png"
import Image from "next/image"
export default function Navbar() {
    return (
        <nav className="border">
            <Image src={logo} alt=""/>
            <div>
                <ul>
                    <Link href="index.js"><a>Home</a></Link>
                    <Link href="About"><a>About</a></Link>
                    <Link href="WhoWeAre"><a>Quines somos</a></Link>
                    <Link href="Activities"><a>Actividades</a></Link>
                </ul>
            </div>
        </nav>
    )
}