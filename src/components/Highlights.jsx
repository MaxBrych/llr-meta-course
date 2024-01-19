import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ",
    price: 12,
    image:
      "https://cdn.discordapp.com/attachments/921375530186579979/1197931809216938174/image_1.jpg?ex=65bd0fef&is=65aa9aef&hm=db152ada42d04b4846b32d95487b584a846f6075fb2915dfed0b314613f634ea&",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ",
    price: 12,
    image:
      "https://cdn.discordapp.com/attachments/921375530186579979/1197931809833488484/image_8.jpg?ex=65bd0fef&is=65aa9aef&hm=04f5b61935255bb2e789c69587066c29d5eac9264a4ed685b34b12de91ec5135&",
  },
  {
    id: 3,
    title: "Pasta",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ",
    price: 12,
    image:
      "https://cdn.discordapp.com/attachments/921375530186579979/1197931807782473788/image_5.jpg?ex=65bd0fef&is=65aa9aef&hm=6bea75a07dd12be140321c115c1e5c8aff6848f977bee0309b531de2fb05f339&",
  },
];

export default function Highlights() {
  return (
    <Flex
      flexDirection="column"
      gap="8"
      bg={"white"}
      h={["auto", "720", "720"]}
      p={["4", "8", "8"]}
      py={8}
      justifyContent="center"
      alignItems="center"
    >
      <Flex justifyContent="space-between" col="hightlight-heading ">
        <h2>Specials</h2>
        <Link role="button" class="button" to="/Booking">
          Our Menu{" "}
        </Link>
      </Flex>
      <div class="highlight-grid">
        {highlights.map((highlight) => (
          <div class="hightlight">
            <Box w="full">
              <Image
                w="full"
                h={["200", "240", "240"]}
                rounded={16}
                src={highlight.image}
                alt={highlight.title}
                class="highlight-image"
              />
            </Box>

            <div class="highlight-text">
              <div class="title-price">
                <h3 class="highlight-title">{highlight.title}</h3>
                <h4 class="highlight-price">
                  ${""}
                  {highlight.price}
                </h4>
              </div>
              <div class="body">{highlight.description}</div>
              <a href="" className="button-secundary" role="secundary">
                Reserve a table
                <ArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Flex>
  );
}
