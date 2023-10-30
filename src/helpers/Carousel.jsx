import React from 'react';
import { Carousel, Button } from 'antd';
import { DownloadOutlined, FolderOpenFilled } from '@ant-design/icons';
const contentStyle = {
  textAlign: 'left',
  fontWeight : 'bolder',
  margin:'0',
  fontSize:'40px'
};

const CarouselComp = () => (
  <Carousel dots autoplay style={{width:'75%',height:'100%',padding:'20px'}}>
    <div style={{height:'100%'}}>
      <h1 style={contentStyle}>Hi! <br/> I'm Venkatesh</h1>
      <Button style={{borderRadius:5, margin:'15px 0'}} size='large'></Button>
    </div>
    <div style={{height:'100%'}}> 
      <h1 style={contentStyle}>I Love <br/>Building Things!!</h1>
      <Button style={{borderRadius:5, margin:'15px 0'}} size='large'> View Projects <FolderOpenFilled /></Button>
    </div>
    <div style={{height:'100%'}}> 
      <h1 style={contentStyle}>Check <br/> my Resume!!</h1>
      <Button style={{borderRadius:5, margin:'15px 0'}} size='large'>View Resume <DownloadOutlined /> </Button>
    </div>
  </Carousel>
);
export default CarouselComp;