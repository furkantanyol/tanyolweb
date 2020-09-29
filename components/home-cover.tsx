import React, { ReactElement } from "react";
import { Text, Image, useTheme, Grid } from "@geist-ui/react";

interface CoverTextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  children: React.ReactNode;
}

const CoverText = ({ children, ...rest }: CoverTextProps): ReactElement => {
  const theme = useTheme();
  return (
    <Text {...rest} style={{ color: theme.palette.accents_1 }}>
      {children}
    </Text>
  );
};

CoverText.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
};

const HomeCover = (): ReactElement => {
  return (
    <div className="full-width bg-black">
      <Grid.Container className="max-screen">
        <Grid xs={24} md={12} className="flex-column-center home-cover-text">
          <CoverText h2>Hello I&apos;m</CoverText>
          <CoverText h1>Furkan Tanyol</CoverText>
          <CoverText h3>
            Turning ideas into reality, creating software.
          </CoverText>
        </Grid>
        <Grid xs={24} md={12} className="image-container">
          <Image
            height={305}
            width={500}
            src="/assets/home/home-bg.jpg"
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default HomeCover;
