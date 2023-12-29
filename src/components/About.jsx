import React from "react";
import { Flex } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      h={["auto", "720", "720"]}
      gap={[4, 8, 8]}
      p={["4", "8", "8"]}
      py={8}
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
          Established in 2021, Little Lemon Restaurant quickly became a culinary
          hotspot in Chicago. The brainchild of Chef Emily Robinson, who found
          inspiration in the versatile flavors of lemons, the restaurant aims to
          provide a dining experience that excites the palate. The establishment
          prides itself on using fresh, locally-sourced ingredients, ensuring
          every dish is as nutritious as it is delicious.
        </p>
      </div>
    </Flex>
  );
}
