import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex>
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
        <img
          src="https://s3-alpha-sig.figma.com/img/a3b3/795e/d1961ad48a75d083b28599231e23d04f?Expires=1704672000&Signature=Fgdst8ZNDx6M~lvnWIWGx5-zq5MLSc26XQjo9uJ1lSM5y1GOIs~GJpzAUGVcvqoib3nMd5VE2I2-ZfEjQpXxaE6bjlFPUDKGxfcf1jvG2aiefpIKJ7vO~jA3i1GcmQpqQHEinMCNjBB0Zu~PW7prm3usIa37AWni3BpdDu6iXK6E~fV4cQizW7-iHv15H~Jlok2ZpbWtiU0YP7WeKVWkhIGFI7Wo57Y5-LGvL2jbetB7SwrMRfSRt5y0aZKNbsqiNTjkbnQZ~ebLd6~laUsT0qIRlD6UulZiR2Iw3qgettgyNXiaqguDglyk8PpV01sucbQmqsN~gVAFVUEpVzg1Cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image"
          class="hero-image"
        />
      </div>
    </Flex>
  );
}
