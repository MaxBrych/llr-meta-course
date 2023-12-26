import React from "react";

const highlights = [
  {
    id: 1,
    title: "Title",
    description: "Description",
    image:
      "https://s3-alpha-sig.figma.com/img/743e/73c0/9d4d70c3d21be03656beaabc90c50931?Expires=1704672000&Signature=Tm-J57PV6fIRVrO5KdX7QZaEcx7gJOo-gPfFNuAUfPdogm9ZtKKb4jJJV85A9A2zJY5L85gP13vELamz5gvFFvtercZ6fR1xWAlDMSlg2sMq0yjNqfboHc0gsknOmiNXpx6keQLvDCUpuV~GN0Vuxb0ER-e3zI1xuubvKWrhLTkbu5bO1Qb30YFSx5VOZaYfooYI-lnOPw6tOu9aNOOL9zAGMxkvz8VDpKkRJ-hO~8kQs7HYNFEbCS9MEcsxzIZKSirDg0WTJ97ny5w36Dwm7AxO5hOTQcfB-7qxQBuMKiymkflkMXWcbc-Be6Knu4qD2NGE~f8E2tD4stTFyKWfXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    title: "Title",
    description: "Description",
    image:
      "https://s3-alpha-sig.figma.com/img/9fda/4f2e/ecbe1e39100ecc3e7caf8e2023ee9e77?Expires=1704672000&Signature=Qwoe7isl1lK8tShLMIQ9l4ZKw78266S9MVjApUMNyklyhIPJpQntfJrWmV1Qh2KJogz9joibXFJthFHgpnWra1cAelphft0EZbauVbWMTsgB3P9KDhIATnluP6bMeh9Y9KzQ9Pk48mfz6TJcQtMrKiv3Q33Yno2sn-zZhYmYRDOA0U8fcyWXRKYJkQ9M1W8KmRrg1THSGCFJ-2RRWsFBFXY9jJEhTQ0jHxMjxuBX3W1ja~M8hA7fd7JaErEubbbq3Y3Y5EFRzgpH46MtJuXs22E2dr-uorwxNtS3rKBQH99t1t1aB~iR4QU0DY~2Pmjm0lD52f1NpWWmzIH-wQ5ZZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    title: "Title",
    description: "Description",
    image:
      "https://s3-alpha-sig.figma.com/img/7aef/3e7e/2f9ce2eeda86634395f8184b2a2ee293?Expires=1704672000&Signature=jICxzdcAHBWflKWbwop-weYZ3BmcclBRLlwZrYTsgsEEgfw5cenQBVyNZaomBkH0AMJtukBFuG0TNvialdPjVeQcTdPV7dtCx6TOM6oWoa3jmY4zpT85NDiv75bjhE~5Dkv76-w7IVYBEJqrpb41XROhmZtgcOjVEMOrE9VwqHR-0b2HeCWZWm2wFt1CFOTCmMirjOE0x22pfUqr2eBn1igwr3RLB4xkqzUbMLa5IKarwv4xZf2TXl6kKRKWuENvmXHT6A0SHi2g23Dapi2j0uq8IkYgaCxHj6PTIGwl7ODH7qRWI4A~sVZSEFYddnPTIKNNDEJylUoE-h77zUsYPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default function Highlights() {
  return (
    <div class="highlights">
      <div col="hightlight-heading ">
        <h2>Specials</h2>
        <a class="button" href="">
          Reserve a table
        </a>
      </div>
      <div class="highlight-grid">
        {highlights.map((highlight) => (
          <div class="hightlight">
            <img
              src={highlight.image}
              alt={highlight.title}
              class="highlight-image"
            />

            <div class="highlight-text">
              <div class="title-price">
                <h3 class="highlight-title">{highlight.title}</h3>
                <h4 class="highlight-price">{highlight.price}</h4>
              </div>
              <div class="body">{highlight.description}</div>
              <a href="" className="button-secundary" role="secundary">
                Reserve a table
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
