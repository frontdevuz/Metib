import React from "react";
import { MapLink } from "./link";
import { Container, Image, Mapping, Title, Wrapper } from "./style";
import Beat from "../../../assets/images/svg/beat.svg";

const Homemap = () => {
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <Title>
            <Image src={Beat} /> Joylashuv
          </Title>
          <Mapping
            src={MapLink}
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Mapping>
        </Wrapper>
      </Container>
    </React.Fragment>
  );
};

export default Homemap;
