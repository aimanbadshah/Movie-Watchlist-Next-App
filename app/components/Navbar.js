'use client';

import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/search'>Search</Link>
            <Link href='/watchlist'>Watchlist</Link>
        </nav>
    )
}