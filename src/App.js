import React from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import { Layout } from 'antd';
import HeaderComponent from './components/Header/HeaderComponent';
import ViewGrades from './components/Grade/ViewGrades';
const { Header, Footer, Content } = Layout;
function App() {
 
  return (
    <Layout>    
      <Header style={{ top:0 ,height:"15%", width:'100%', right:0, backgroundColor:'lightblue', padding:0}}><HeaderComponent/></Header> 
      <Content> <ViewGrades/> </Content>
      <Footer className='footer' style={{position:'fixed', bottom:0 , height:"7%",width:'100%', right:0}}><h1 style={{alignContent:'center'}}> Footer Copyrights </h1></Footer>
    </Layout>
  );
}

export default App;
