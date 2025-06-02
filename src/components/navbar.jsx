"use client"
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { navItems } from "@/app/system";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const path = usePathname()

    const whitePaths = ["/", "/post"];

    const isActive = (href) => {
        return href === "/" ? path === "/" : path.startsWith(href)
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 z-999 navbar min-h-[55px] h-[55px] duration-300 ease-in-out transition-all w-full
                          ${isScrolled && "bg-brand-neutral/80 shadow backdrop-blur-md border-b"}
                          ${whitePaths.includes(path) && !isScrolled && "!text-white border-none"}
                `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        Riven Foundation
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map((i, idx) => (
                            <li key={idx}>
                                <Link
                                    href={i.href}
                                    className={`${isActive(i.href) && "text-brand-main font-bold"} hover:text-brand-main relative`}
                                >
                                    {i.label}
                                    {isActive(i.href) && (
                                        <div className={`${isScrolled ? "w-5 h-[3px]" : "-translate-y-3 w-[5px] h-[5px]"} absolute left-1/2 -bottom-[12px] transform -translate-x-1/2  rounded-full bg-brand-main duration-200`} />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeSwitch className={"btn btn-ghost btn-xs"} />
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>

    );
}