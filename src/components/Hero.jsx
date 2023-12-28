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
            Nestled in the heart of Chicago, the Little Lemon Restaurant offers
            a refreshing twist on traditional cuisine. Known for its vibrant
            atmosphere and innovative dishes, this eatery stands out with its
            lemon-themed decor and a menu that creatively incorporates lemon in
            various forms.
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
