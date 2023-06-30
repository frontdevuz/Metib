import React, { useState } from 'react'
import { Box, Button, Card, CardBlock, CardBottom, CardIcon, CardIconText, CardImage, CardLeft, CardLeft1, CardRight, CardRight1, CardText, CardTitle, CardWrap, ClinicsPlace, Container, Input, MoreButton, MoreButton2, Reyting, Row, Wrapper } from './style'
import { Avatar, AvatarGroup, Rating } from '@mui/material'
import Hos1 from '../../../assets/images/png/hos1.png';
import Cell from '../../../assets/images/png/cell.png';
import LocationIcon from '../../../assets/images/png/location.png';
import {clinics} from '../../../data/clinic'

const List = ({Cards,setCards}) => {
  const [search_word, setsearch_word] = useState('')

  const change = (word) => {
    let filtered = clinics.filter((item)=>{
      return item.name?.toLowerCase()?.includes(word?.toLowerCase())
    })
    setCards(filtered)
  }


  return (
    <Container>
        <Wrapper>
            <Box>
                <Input  placeholder='Qidiruv...' onChange={(e)=>change(e.target.value)} />
                <Button>Search</Button>
            </Box>
            <ClinicsPlace>
                {
                  Cards?.map((item,index)=>(
                    <Card key={index}>
                      <Row>
                        <CardLeft>
                          <CardImage src={item.img} />
                          <Reyting><Rating name="read-only" value={item.rating} readOnly /></Reyting>
                        </CardLeft>
                        <CardRight>
                          <CardTitle>{item.name}</CardTitle>
                          <CardText>{item.description}</CardText>
                          <CardBlock>
                          <AvatarGroup total={10} >
                            {
                              item.doctors?.slice(0,3).map((r,i)=>(
                                <Avatar key={i} className='maingr' alt={r.name} src={r.img} />
                              ))
                            }
                          </AvatarGroup>
                          </CardBlock>
                        </CardRight>
                      </Row>
                        <CardBottom>
                          <CardLeft1>
                              <CardWrap>
                                  <CardIcon src={LocationIcon} />
                                  <CardIconText>{item.addres}</CardIconText>
                              </CardWrap>
                              <CardWrap>
                                  <CardIcon src={Cell} />
                                  <CardIconText>{item.tel}</CardIconText>
                              </CardWrap>
                          </CardLeft1>
                          <CardRight1>
                            <MoreButton>Qabulga yozilish</MoreButton>
                            <MoreButton2>Batafsil</MoreButton2>
                          </CardRight1>
                        </CardBottom>
                    </Card>
                  ))
                }
            </ClinicsPlace>
        </Wrapper>
    </Container>
  )
}

export default List