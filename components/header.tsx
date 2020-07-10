import Link from 'next/link'
import React from "react";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <div className="pr-2">
            <Link href="/">
                <a className="hover:underline">Home</a>
            </Link>
            .
        </div>
        <div className="pr-2">
            <Link href="/blog">
                <a className="hover:underline">Blog</a>
            </Link>
            .
        </div>
    </h2>
  )
}

export default Header
