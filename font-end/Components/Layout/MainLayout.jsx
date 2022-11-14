import HeaderComponent from "./HeaderComponent";
import {Container} from'@mantine/core';
import {Layout} from'antd';
import FooterComponent from "./FooterComponent";
const {Header,Content,Footer} = Layout;
const MainLayout =({children}) =>{
return( 
    <Layout className="bg-gray-100">    
        <Header>
        <HeaderComponent />
        </Header>

       <Content>
 
       {children}
       
       </Content>

        <Footer className="bg-green-600">
        <Container size={1500}>
        <FooterComponent />
        </Container>
        </Footer>
    </Layout>
)
}
export default MainLayout;