import { Button, Image, SimpleGrid, Text, Title } from "@mantine/core"

const Events=()=>{
    return(
       <div>
       <Title className="py-5">Sự kiện</Title>
       <SimpleGrid cols={3}>
       <div className="border">
       <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVJw9mP1TjSch8jH7r80UlM0DwayVUAv0PnhBwfAz&s" />
      <div className="p-5"> 
      <a href=""><Title order={3}>Title Events</Title></a>
      <Text className="my-5">Phú Diễn City</Text>
      <Text>15:30, T6-13-9-2022</Text>
      <div className="flex justify-between mt-5" >
      <Button color="green">Đăng kí</Button>
      <Text color="green">Đang diễn ra</Text>
      </div>
       </div>
       </div>
       <div>
       <div className="border">
       <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVJw9mP1TjSch8jH7r80UlM0DwayVUAv0PnhBwfAz&s" />
      <div className="p-5"> 
      <a href=""><Title order={3}>Title Events</Title></a>
      <Text className="my-5">Phú Diễn City</Text>
      <Text>15:30, T6-13-9-2022</Text>
      <div className="flex justify-between my-5">
      <Button color="green">Đăng kí</Button>
      <Text color="purple">Kết thúc</Text>
      </div>
       </div>
       </div>
       </div>
       <div>
       <div className="border">
       <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVJw9mP1TjSch8jH7r80UlM0DwayVUAv0PnhBwfAz&s" />
      <div className="p-5"> 
      <a href=""><Title order={3}>Title Events</Title></a>
      <Text className="my-5">Phú Diễn City</Text>
      <Text>15:30, T6-13-9-2022</Text>
      <div className="flex justify-between my-5">
      <Button color="green">Đăng kí</Button>
      <Text color="green">Đang diễn ra</Text>
      </div>
       </div>
       </div>
       </div>
     
     </SimpleGrid>
       </div>
    )
}
export default Events;