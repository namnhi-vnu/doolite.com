import Link from 'next/link'
import { GoHomeFill } from "react-icons/go";
import { MdOndemandVideo } from "react-icons/md";
const Header = () => {
    return (
        <>
            <header className=" py-2 border-b border-zinc-600">
                <nav className='py-1'>
                    <div className="container mx-auto ">
                        <div>
                            <div>
                                <div className="logo">
                                    <h1 className='text-xl font-bold'>Doolite</h1>
                                </div>
                                <div className="">
                                    <div>
                                        <ul>
                                            <li>
                                                <Link href='/'>
                                                    <GoHomeFill />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/'>
                                                    <MdOndemandVideo />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;