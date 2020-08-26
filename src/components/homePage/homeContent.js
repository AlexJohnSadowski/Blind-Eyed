import React from "react";
//Styled Components
import { Container } from "../../styles/globalStyles";
import { Content, HomeContentSection } from "../../styles/homeStyles";

const HomeContent = () => {
  return (
    <HomeContentSection>
      <Container>
        <Content>
          <p>It is a place for everyone who wants to increase the comfort of their
          life.</p> 
          <p>We are here to help you understand yourself, set clear goals and achieve them
          effectively. Discovering yourself can be difficult, our role is to be
          a guide.</p>
        </Content>
      </Container>
    </HomeContentSection>
  );
};

export default HomeContent;
