import React from "react";
import { Container, Grid } from "@mantine/core";

const FooterComponent = () => {
  return (
    <div className="main pl-24">
      <Grid>
        <Grid.Col span={3}>
          <div className="flex pt-4">
            <img
              className="hidden h-14 w-auto lg:block pr-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/HUNRE_Logo.png/640px-HUNRE_Logo.png"
              alt="Your Company"
            />

            <b className="text-white" style={{ fontSize: 15 }}>
              Cộng đồng cựu sinh viên Trường Đại Học Tài Nguyên Và Môi Trường Hà
              Nội
            </b>
          </div>
          <ul className="list text text-white" style={{ lineHeight: "50px" }}>
            <li className="pl-14">Phone: 0962034489</li>
            <li className="pl-14">Email: hunre@.edu.vn</li>
            <li className="pl-14">
              Địa chỉ:<span> 41 A Phú Diễn Bắc Từ Liêm</span>
            </li>
            <li className="pl-14">
              <a href="" className="text-indigo-500 underline ">
                Powered by Worldsoft Corporation
              </a>
            </li>
            <li>
              {" "}
              <span className="text-xs   pl-14">
                Copyright © 2022 Hunre Alumni - All right reserved{" "}
              </span>
            </li>
          </ul>
        </Grid.Col>
        <Grid.Col span={3}>
          {" "}
          <ul className="text-white text-center" style={{ lineHeight: "50px" }}>
            <li>Giới Thiệu</li>
            <li>Tin Tức</li>
            <li>Kết Nối</li>
            <li>Sự Kiện</li>
            <li>Tuyển Dụng</li>
          </ul>
        </Grid.Col>
        <Grid.Col span={3}>
          <ul className="text-white text-center" style={{ lineHeight: "50px" }}>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Hướng dẫn sử dụng</li>
            <li>Hỗ trợ thành viên</li>
          </ul>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default FooterComponent;
