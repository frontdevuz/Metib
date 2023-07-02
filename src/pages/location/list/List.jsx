import React, { useEffect, useState } from 'react'
import { Box, ButtonAnt, ButtonAnt2, ButtonMy, Card, CardBlock, CardBottom, CardIcon, CardIconText, CardImage, CardLeft, CardLeft1, CardRight, CardRight1, CardText, CardTitle, CardWrap, ClinicsPlace, Container, Input, MoreButton, MoreButton2, Reyting, Row, Wrapper } from './style'
import { Avatar, AvatarGroup, Rating } from '@mui/material'
import Cell from '../../../assets/images/png/cell.png';
import LocationIcon from '../../../assets/images/png/location.png';
import {clinics} from '../../../data/clinic'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const List = ({Cards,setCards}) => {
  const [Show, setShow] = useState(true)
  const navigate = useNavigate()
  const change = (word) => {
    let filtered = clinics.filter((item)=>{
      return item.name?.toLowerCase()?.includes(word?.toLowerCase())
    })
    setCards(filtered)
  }

  function HandleClinic(item) {
    navigate('/clinics',{state:item})
  }

  useEffect(()=>{
    function Change(params) {
      setShow(true)
    }
    Change()
  },[setCards,Cards])


  return (
    <React.Fragment>
    {Show ? "" : <ButtonAnt2 onClick={()=>setShow(true)} type="outlined" icon={<MenuUnfoldOutlined  style={{fontSize:25,color:"#65B389"}}/>} size={"large"} />}
    <Container Show={Show}>
        <Wrapper>
            <Box>
                <Input  placeholder='Qidiruv...' onChange={(e)=>change(e.target.value)} />
                <ButtonMy>Search</ButtonMy>
                <ButtonAnt 
                    onClick={()=>setShow(false)} 
                    type="outlined" 
                    icon={<MenuUnfoldOutlined  style={{fontSize:30,color:"#65B389"}}/>} 
                    size={"large"} 
                  />
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
                            <MoreButton2 onClick={()=>HandleClinic(item)}>Batafsil</MoreButton2>
                          </CardRight1>
                        </CardBottom>
                    </Card>
                  ))
                }
            </ClinicsPlace>
        </Wrapper>
    </Container>
    </React.Fragment>

  )
}

export default List