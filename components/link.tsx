import React from "react";
import NextLink, {LinkProps as NextLinkProps} from 'next/link'
import {useTheme, Text} from "@zeit-ui/react";
import {useRouter} from "next/router";

interface LinkProps extends NextLinkProps {
    children: React.ReactNode
}

const Link = ({children, href}: LinkProps) => {
    const router = useRouter()
    const theme = useTheme()
    const style = {
        color: router.pathname === href ? theme.palette.accents_8 : theme.palette.accents_4,
    }
    return (
        <NextLink href={href}>
            <Text style={style}>{children}</Text>
        </NextLink>
    )
}

export default Link