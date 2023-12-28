import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      bg={"#495e57"}
      h="720"
      p={8}
      gap={8}
      class="hero"
      flexDirection={["column", "column", "row"]}
    >
      <div class="col">
        <h1>Little Lemon</h1>
        <div class="wrapper">
          <h5>Chicago</h5>
          <p class="p-hero">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.{" "}
          </p>
        </div>
        <Link role="button" class="button" to="/Booking">
          Reserve a table
        </Link>
      </div>
      <div class="col-right">
        <img src="" alt="" />
      </div>
    </Flex>
  );
}
