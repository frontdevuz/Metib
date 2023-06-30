import React from "react";
import { MapLink } from "./link";
import { Container, Image, Mapping,  Wrapper } from "./style";
import Title from "../../../components/title/title";
const Homemap = () => {
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <Title>
            Joylashuv
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
