import { Container, Grid, Image, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Hots from "./Hots";
import Recruit from "./Recruit";
import Events from "./Events";
const contentStyle = {
  // height: '160px',
  // color: '#fff',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
  // width:'100%'
};

const HomePage = () => {
  return (
    <div>
      <Image src="https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg" />

      <div>
        <Hots />
      </div>
      <div>
        <Recruit />
      </div>
      <div className="my-10">
        <Container>
          <Title className="my-10">Hình Ảnh </Title>
          <Carousel
            withIndicators
            height={200}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
          >
            <Carousel.Slide>
              {" "}
              <Image src="https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg" />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image src="https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg" />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image src="https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg" />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image src="https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg" />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image src="https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg" />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image src="https://btnmt.1cdn.vn/2020/08/11/3-1-.jpg" />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </Container>
      </div>
      <div style={{ background: "#eaeaea" }}>
        <Container>
          <Title className="py-10">Video</Title>
          <Grid>
            <Grid.Col span={9}>
              <iframe
                className="w-full aspect-video  hover:aspect-square rounded-md"
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/qAQHz2zPFFQ"
                title="Đen - Đi Theo Bóng Mặt Trời ft. Tăng Ngân Hà, Maius Philharmonic"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Grid.Col>
            <Grid.Col span={3}>
              <iframe
                className="w-full aspect-video  hover:aspect-square rounded-md mb-5"
                width="100%"
                height="120px"
                src="https://www.youtube.com/embed/qAQHz2zPFFQ"
                title="Đen - Đi Theo Bóng Mặt Trời ft. Tăng Ngân Hà, Maius Philharmonic"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                className="w-full aspect-video  hover:aspect-square rounded-md mb-5"
                width="100%"
                height="120px"
                src="https://www.youtube.com/embed/qAQHz2zPFFQ"
                title="Đen - Đi Theo Bóng Mặt Trời ft. Tăng Ngân Hà, Maius Philharmonic"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                className="w-full aspect-video  hover:aspect-square rounded-md mb-5"
                width="100%"
                height="120px"
                src="https://www.youtube.com/embed/qAQHz2zPFFQ"
                title="Đen - Đi Theo Bóng Mặt Trời ft. Tăng Ngân Hà, Maius Philharmonic"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <div className="my-20">
        <Container>
          <Title className="py-10">Thường trực ban đại diện Hunre</Title>
          <Carousel
            withIndicators
            slideSize="25%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
          >
            <Carousel.Slide>
              <div>
                <Image
                  width={216}
                  height={200}
                  radius={800}
                  src="https://hunre.edu.vn/media/data/Ban-Trung-tam---To-chuc-khac/BGH/HT.jpg"
                />
                <Title order={5} className="p-5 text-center" >  PGS.TS Hoàng Anh Huy</Title>
                <Text align="center">Hiệu Trưởng</Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div>
                <Image
                  width={216}
                  height={200}
                  radius={800}
                  src="https://hunre.edu.vn/media/data/Ban-Trung-tam---To-chuc-khac/BGH/PHT_Vu_Danh_Tuyen.jpg"
                />
                <Title order={5} className="py-5 text-center">  PGS.TS.Vũ Danh Tuyên</Title>
                <Text align="center">Phó Hiệu Trưởng</Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div>
                <Image
                  width={216}
                  height={200}
                  radius={800}
                  className="text-center"
                  src="https://hunre.edu.vn/media/data/Ban-Trung-tam---To-chuc-khac/BGH/Mrs_Trinh.jpg"
                />
                <Title order={5} className="p-5 text-center">   PGS.TS Lê Thị Trinh</Title>
                <Text align="center">Phó Hiệu Trưởng</Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div>
                <Image
                  width={216}
                  height={200}
                  radius={800}
                  src="https://hunre.edu.vn/media/data/Ban-Trung-tam---To-chuc-khac/H%E1%BB%99i_%C4%91%E1%BB%93ng_tr%C6%B0%E1%BB%9Dng/C._Huong.jpg"
                />
                <Title order={5} className="p-5 text-center">Huỳnh Thị Lan Hương</Title>
                <Text align="center" className="">Chủ tịch hội đồng Trường</Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div>
                <Image
                  width={100}
                  radius="xl"
                  src="https://yt3.ggpht.com/ytc/AMLnZu-yp40lCJvlV13cF82Y_1pNQQzX6wIC0BeS5Lkimw=s900-c-k-c0x00ffffff-no-rj"
                />
                <Title>NGuyễn Văn A</Title>
                <Text>Abc</Text>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div>
                <Image
                  width={100}
                  radius="xl"
                  src="https://yt3.ggpht.com/ytc/AMLnZu-yp40lCJvlV13cF82Y_1pNQQzX6wIC0BeS5Lkimw=s900-c-k-c0x00ffffff-no-rj"
                />
                <Title>NGuyễn Văn A</Title>
                <Text>Abc</Text>
              </div>
            </Carousel.Slide>
          </Carousel>
        </Container>
      </div>
     
   
    <div className="event my-10">
    <Container>
    <Events />  
    </Container>
    </div>
  
    </div>
  );
};
export default HomePage;
