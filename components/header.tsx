import React from "react";
import {Breadcrumbs, Text} from "@zeit-ui/react";
import {Coffee, Home} from "@zeit-ui/react-icons";
import {PATHS} from "../lib/constants";
import Link from "./link";

const Header = () => {
    return (
        <Breadcrumbs size="large" separator=" ">
            <Link href={PATHS.HOME}>
                <Breadcrumbs.Item nextLink>
                    <Home/><Text>Home</Text>
                </Breadcrumbs.Item>
            </Link>
            <Link href={PATHS.BLOG}>
                <Breadcrumbs.Item nextLink>
                    <Coffee/><Text>Blog</Text>
                </Breadcrumbs.Item>
            </Link>
        </Breadcrumbs>
    )
}

export default Header
