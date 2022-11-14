import { Title,Image,Grid, Text, Container } from "@mantine/core";
const Recruit = () =>{
    return(
     <div className="bg-green-200 my-5">
     <Container>
     <Title className="py-5">Tuyển dụng</Title>
     <Grid className="pb-5">
     <Grid.Col span={6}>
   
  <a href=""><Image radius='sm' src='https://bka.edu.vn/assets/images/portal/ungtuyen.png' /></a>

     </Grid.Col>
     <Grid.Col span={6}>
     <a href=""><Image radius='sm' src='https://bka.edu.vn/assets/images/portal/timkiemungvien.png'/></a>
     </Grid.Col>
     
   </Grid>
     </Container>
     </div>
    )
}
export default Recruit;