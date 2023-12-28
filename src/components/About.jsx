import React from "react";
import { Flex } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex>
      <div class="col-left">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.{" "}
        </p>
      </div>
      <div class="col-right">
        <img src="" alt="" />
      </div>
    </Flex>
  );
}
