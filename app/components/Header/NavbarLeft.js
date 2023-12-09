import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
const NavbarLeft = () => {
    return (
        <div className='border-r border-zinc-600 fixed left-2 top-[20%] w-60 h-[450px] '>
            <div className="">
                <div>
                    <div className='px-4 py-3'>
                        <ul className='flex flex-col gap-3 text-white'>
                            <li className=''>
                                <div>
                                    <Link href="/" className='flex items-center gap-2'>
                                        <span className='text-2xl'>
                                            <IoSearch />
                                        </span>
                                        <span className='text-lg'>Tìm kiếm</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link href="/" className='flex items-center gap-2'>
                                        <span className='text-2xl'>
                                            <AiOutlineBell />
                                        </span>
                                        <span className='text-lg'>Thông báo</span>
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLeft