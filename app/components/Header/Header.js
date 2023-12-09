import Link from 'next/link'
import Image from 'next/image'
import { GoHomeFill } from "react-icons/go";
import { MdOndemandVideo } from "react-icons/md";
import { HiMiniBars3BottomRight, HiMiniPencilSquare } from "react-icons/hi2";
import { BiMessageSquareDots } from "react-icons/bi";
import Profile from '../Account/Profile';
const Header = () => {
    return (
        <>
            <header className=" py-2 border-b border-zinc-600 bg-bg-header dark sticky top-0">
                <nav className='py-1'>
                    <div className="container mx-auto text-white">
                        <div>
                            <div className="flex items-center ">
                                <div className="logo w-32">
                                    <h1 className='text-xl font-bold'>Doolite</h1>
                                </div>
                                <div className=" flex-1 flex items-center justify-center mr-32 text-black">
                                    <div>
                                        <ul className='flex items-center justify-center gap-10 bg-white w-fit px-10  rounded-3xl '>
                                            <li className='relative group px-2 pt-2 '>
                                                <Link href='/' className='text-3xl inline-block pb-pb text-center text-sky-500'>
                                                    <GoHomeFill />
                                                </Link>
                                                <span className='w-full group-hover:duration-500 duration-400 bg-sky-600 group-hover:h-1 inline-block h-0 absolute bottom-0 left-0 rounded-t'></span>
                                            </li>
                                            <li className='relative px-2 pt-2 group'>
                                                <Link href='/' className='text-3xl inline-block pb-pb text-center text-gray-500'>
                                                    <MdOndemandVideo />
                                                </Link>
                                                <span className='w-full group-hover:duration-500 duration-400 bg-sky-600 group-hover:h-1 inline-block h-0 absolute bottom-0 left-0 rounded-t'></span>
                                            </li>
                                            <li className='relative px-2 pt-2 group'>
                                                <Link href='/' className='text-3xl inline-block pb-pb text-center text-gray-500'>
                                                    <HiMiniPencilSquare />
                                                    <span className='w-full group-hover:duration-500 duration-400 bg-sky-600 group-hover:h-1 inline-block h-0 absolute bottom-0 left-0 rounded-t'></span>
                                                </Link>
                                            </li>
                                            <li className='relative px-2 pt-2 group'>
                                                <Link href='/' className='text-3xl inline-block pb-pb text-center text-gray-500'>
                                                    <BiMessageSquareDots />
                                                </Link>
                                                <span className='w-full group-hover:duration-500 duration-400 bg-sky-600 group-hover:h-1 inline-block h-0 absolute bottom-0 left-0 rounded-t'></span>
                                            </li>
                                            <li >
                                                <Link href="/">
                                                    <Profile />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="user-account">
                                    <div>
                                        <div>
                                            <div>
                                                {/* <Image src="/avata.jpg" width={35} height={35} alt="" className='rounded-full' /> */}
                                                <div className='text-3xl' role='button'>
                                                    <HiMiniBars3BottomRight />
                                                </div>
                                            </div>
                                        </div>
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