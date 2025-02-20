import { useEffect, useState } from 'react'
import { publicRoutes } from '@/route';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {useAutoAnimate} from "@formkit/auto-animate/react"
import logo from "@/assets/book-square.svg"

import IconId from '@/utils/icon-consts';
import Icon from './block/Icon';
import { Button } from './ui/button';
import { MESSAGE } from '@/utils/consts';


const MobileNav = () => {

    const [state, setState] = useState(false);
    const [block] = useAutoAnimate();

    const {pathname} = useLocation();

    useEffect(( ) => {
        setState(false)
    }, [pathname])

    return (
        <div ref={block} className="">
            <Button onClick={() => setState(prev => !prev)} size="rounded" variant="rounded">
                <Icon  className="text-second-300" id={IconId.burgerMenu}/>
            </Button>
            

            {
                state && <div className={`fixed  w-full h-full right-0 top-0 z-50 flex justify-end bg-stone-300 transition-all duration-300`}>
                <div className="p-8 w-[80%] h-full bg-white sm:w-96">
                    <div className="pb-8 flex items-center justify-between gap-4 border-b border-solid border-main">
                        <Link to="/" className="flex gap-3 text-lg items-center  font-semibold leading-normal xl:justify-start text-second-500">
                            <img width={30} height={30} src={logo} alt="Logo" />
                            <span className="">DNX</span>
                        </Link>
                        <button onClick={() => setState(false)}>
                            <Icon  className="text-second-300" id={IconId.burgerClose}/>
                        </button>
                        
                    </div>
                    <nav className="pt-8">
                        <ul className="flex flex-col gap-6">
                        {
                            publicRoutes.map((item) => {
                                return (
                                    <li className="">
                                        <NavLink to={item.path} className="flex gap-3 group nav-link items-center justify-start  py-2.5 px-5">
                                            <div className="">
                                                <Icon className="text-second-300" id={item.icon}/> 
                                            </div>
                                            <div className="text-sm text-second-300 nav-text font-semibold leading-normal">
                                                {item.name}
                                            </div>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }








                            <li className="">
                                <NavLink to={MESSAGE} className="flex gap-3 group nav-link items-center justify-start  py-2.5 px-5">
                                    <div className="">
                                        <Icon className='text-second-300' id={IconId.message}/>
                                    </div>
                                    <div className="text-sm text-second-300 nav-text font-semibold leading-normal">
                                        Message
                                    </div>
                                </NavLink>
                            </li>



                        </ul>
                        
                    </nav>
                </div>
            </div>
            }
        </div>
        
    )
}

export default MobileNav