import {Col, Text, Image, Row, useTheme, Grid, Avatar} from "@zeit-ui/react";
import React from "react";

const HomeAbout = () => {
    const theme = useTheme()

    return (
        <Grid.Container>
            <Grid xs={24} md={12} className="flex-column-center">
                <Text h3>About Me</Text>
                <Avatar src="/assets/home/ft-pic.jpeg" size="large" />
                <Text p>Hi! I'm Furkan, a software engineer based in Sydney, Australia. I have a passion in creating next-generation software, including websites, web & mobile applications. I specialize in building efficient and reusable front end abstractions and systems.</Text>
                <Text p>Over the 5 years of my career, I've worked on great products for a range of startups, in a variety of industries. I specialize in JavaScript, it’s features, frameworks and libraries. I am dedicated to deliver pixel perfect applications with great user experience.</Text>
            </Grid>
            <Grid xs={24} md={12}>
                {/*<Image height={305} width={500} src="/assets/home/ft-pic.jpeg"/>*/}
            </Grid>
        </Grid.Container>
    )
}

export default HomeAbout