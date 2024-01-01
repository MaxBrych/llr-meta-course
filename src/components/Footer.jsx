import React from "react";
import Logo from "./lib/LogoLight";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-wrapper">
        <div class="footer-col">
          {" "}
          <Logo />{" "}
        </div>

        <div class="footer-col-text">
          <h6>E-Mail</h6>
          <div class="info">
            <h6>little.lemon@gmail.com</h6>
          </div>
        </div>
        <div class="footer-col-text">
          <h6>Telephone</h6>
          <div class="info">
            {" "}
            <h6>+49 01231595</h6>{" "}
          </div>
        </div>
        <div class="footer-col-text">
          <h6>Navigation</h6>
          <Link class="link" to="/">
            Home
          </Link>
          <Link class="link" to="/Booking">
            Booking
          </Link>
        </div>
      </div>
    </div>
  );
}
