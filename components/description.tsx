import React from 'react'
import {Description as ZeitDescription, Spacer, useTheme} from "@zeit-ui/react";

type DescriptionProps = {
    title: React.ReactNode
    content: React.ReactNode
    x?: number
    y?: number
}

const Description = ({ title, content, x, y }: DescriptionProps) => {
    const theme = useTheme()
    return (
        <>
            <ZeitDescription className="custom-description" title={title} content={content} />
            <Spacer x={x} y={y}/>
        </>
    )
}

export default Description
