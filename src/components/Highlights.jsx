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
      "https://s3-alpha-sig.figma.com/img/743e/73c0/9d4d70c3d21be03656beaabc90c50931?Expires=1704672000&Signature=Tm-J57PV6fIRVrO5KdX7QZaEcx7gJOo-gPfFNuAUfPdogm9ZtKKb4jJJV85A9A2zJY5L85gP13vELamz5gvFFvtercZ6fR1xWAlDMSlg2sMq0yjNqfboHc0gsknOmiNXpx6keQLvDCUpuV~GN0Vuxb0ER-e3zI1xuubvKWrhLTkbu5bO1Qb30YFSx5VOZaYfooYI-lnOPw6tOu9aNOOL9zAGMxkvz8VDpKkRJ-hO~8kQs7HYNFEbCS9MEcsxzIZKSirDg0WTJ97ny5w36Dwm7AxO5hOTQcfB-7qxQBuMKiymkflkMXWcbc-Be6Knu4qD2NGE~f8E2tD4stTFyKWfXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ",
    price: 12,
    image:
      "https://s3-alpha-sig.figma.com/img/9fda/4f2e/ecbe1e39100ecc3e7caf8e2023ee9e77?Expires=1704672000&Signature=Qwoe7isl1lK8tShLMIQ9l4ZKw78266S9MVjApUMNyklyhIPJpQntfJrWmV1Qh2KJogz9joibXFJthFHgpnWra1cAelphft0EZbauVbWMTsgB3P9KDhIATnluP6bMeh9Y9KzQ9Pk48mfz6TJcQtMrKiv3Q33Yno2sn-zZhYmYRDOA0U8fcyWXRKYJkQ9M1W8KmRrg1THSGCFJ-2RRWsFBFXY9jJEhTQ0jHxMjxuBX3W1ja~M8hA7fd7JaErEubbbq3Y3Y5EFRzgpH46MtJuXs22E2dr-uorwxNtS3rKBQH99t1t1aB~iR4QU0DY~2Pmjm0lD52f1NpWWmzIH-wQ5ZZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    title: "Pasta",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ",
    price: 12,
    image:
      "https://s3-alpha-sig.figma.com/img/7aef/3e7e/2f9ce2eeda86634395f8184b2a2ee293?Expires=1704672000&Signature=jICxzdcAHBWflKWbwop-weYZ3BmcclBRLlwZrYTsgsEEgfw5cenQBVyNZaomBkH0AMJtukBFuG0TNvialdPjVeQcTdPV7dtCx6TOM6oWoa3jmY4zpT85NDiv75bjhE~5Dkv76-w7IVYBEJqrpb41XROhmZtgcOjVEMOrE9VwqHR-0b2HeCWZWm2wFt1CFOTCmMirjOE0x22pfUqr2eBn1igwr3RLB4xkqzUbMLa5IKarwv4xZf2TXl6kKRKWuENvmXHT6A0SHi2g23Dapi2j0uq8IkYgaCxHj6PTIGwl7ODH7qRWI4A~sVZSEFYddnPTIKNNDEJylUoE-h77zUsYPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
