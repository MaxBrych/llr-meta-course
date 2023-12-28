import React from "react";
import { Flex } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      h="720"
      gap={8}
      p={8}
      bg={"white"}
      class="about"
      flexDirection={["column", "column", "row"]}
    >
      {" "}
      <div class="col-right">
        <img
          class="about-img"
          src="https://cdn.discordapp.com/attachments/911669935363752026/1189965399278768178/unsplash_iv6yNy7oBqQ.jpg?ex=65a014a3&is=658d9fa3&hm=ad654578c7ab5606a71c60269891ae32140ab0e2e1fd70c40d3cc1e057c59ed0&
"
          alt=""
        />
      </div>
      <div class="col-left">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.{" "}
        </p>
      </div>
    </Flex>
  );
}
