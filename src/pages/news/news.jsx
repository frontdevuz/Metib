import React from "react";
import { BgImg, Block, Container, DateRow, InnerBlock, Left, Right, SvgIcon, Text, Title, Wrapper, WrapperInner } from "./style";
import Person_BG from "../../assets/images/png/person_bg.png";
import SeenSvg from "../../assets/images/svg/seen.svg";
import CalendarSvg from "../../assets/images/svg/calendar.svg";
import { homeNumber } from "../../data/homenumber";
import Card from "./card";
import { BLOG } from "../../data/blog";

const News = () => {
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
        <BgImg src={Person_BG} alt="" />
          <WrapperInner>
            <Left>{homeNumber?.map((news,i)=><Card news={news} key={i}/>)}</Left>
            <Right>
                {
                  BLOG?.map((item,i)=>(
                    <Block>
                      <InnerBlock>
                        <DateRow>
                          <SvgIcon src={CalendarSvg} />
                          <Text>{item.date}</Text>
                        </DateRow>
                        <Title>{item.title}</Title>
                      </InnerBlock>
                      <DateRow>
                          <SvgIcon src={SeenSvg} />
                          <Text>{item.seen}</Text>
                      </DateRow>
                    </Block>
                  ))
                }
            </Right>
          </WrapperInner>
        </Wrapper>
      </Container>
    </React.Fragment>
  );
};

export default News;
