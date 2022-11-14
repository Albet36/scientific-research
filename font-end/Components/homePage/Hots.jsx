import { Title,Image,Grid, Text, Container } from "@mantine/core";

const  Hots = () => {
    return(
       <Container>
       <Title className="my-10">Tin Tức</Title>
      
       <Grid>
       <Grid.Col span={6} className="bg-slate-100 rounded-xl"> 
     <div className="">
     <Image radius='sm' src='https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg' />
    <div className="py-5">
    <a href="#"> <Title size="sm">Khoa Kỹ thuật Xây dựng: Các giải thể thao lớn chào mừng 65 năm thành lập Trường</Title></a>
    <p className="py-5">Tỉnh Quảng Ngãi sẽ đầu tư xây dựng cầu bắc qua sông Trà Khúc và công trình thủy lợi với chi phí dự kiến hơn 1.745 tỷ đồng.</p>
    </div>
     </div>
       </Grid.Col>
       <Grid.Col span={6}> 
        <div className="pb-10">
        <Grid>
        <Grid.Col span={5}>
        <Image width="auto" radius='sm' height="100%"  src='https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg' />
        </Grid.Col>
        <Grid.Col span={7}>
        <a href="#"> <Title className="text-sm">Khoa Kỹ thuật Xây dựng: Các giải thể thao lớn chào mừng 65 năm thành lập Trường</Title></a>
        <Text size='sm'>Tỉnh Quảng Ngãi sẽ đầu tư xây dựng cầu bắc qua sông Trà Khúc và công trình thủy lợi với chi phí dự kiến hơn 1.745 tỷ đồng.</Text>
        </Grid.Col>
        </Grid>
        
      
      
       </div>
       <div className="pb-10">
       <Grid>
       <Grid.Col span={5}>
       <Image width="auto" radius='sm' height="100%"  src='https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg' />
       </Grid.Col>
       <Grid.Col span={7}>
       <a href="#"> <Title className="text-sm">Khoa Kỹ thuật Xây dựng: Các giải thể thao lớn chào mừng 65 năm thành lập Trường</Title></a>
       <Text size='sm'>Tỉnh Quảng Ngãi sẽ đầu tư xây dựng cầu bắc qua sông Trà Khúc và công trình thủy lợi với chi phí dự kiến hơn 1.745 tỷ đồng.</Text>
       </Grid.Col>
       </Grid>
       
     
     
      </div>
      <div className="pb-10">
      <Grid>
      <Grid.Col span={5}>
      <Image width="auto" radius='sm' height="100%"  src='https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg' />
      </Grid.Col>
      <Grid.Col span={7}>
      <a href="#"> <Title className="text-sm">Khoa Kỹ thuật Xây dựng: Các giải thể thao lớn chào mừng 65 năm thành lập Trường</Title></a>
      <Text size='sm'>Tỉnh Quảng Ngãi sẽ đầu tư xây dựng cầu bắc qua sông Trà Khúc và công trình thủy lợi với chi phí dự kiến hơn 1.745 tỷ đồng.</Text>
      </Grid.Col>
      </Grid>
      
    
    
     </div>
       </Grid.Col>
     </Grid>
       </Container>
    )
}
export default Hots;