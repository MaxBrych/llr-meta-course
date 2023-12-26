import React from "react";
import Logo from "./lib/LogoLight";

export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-wrapper">
        <div class="footer-col">
          {" "}
          <Logo />{" "}
          <div class="contact-info">
            <div class="info">
              {" "}
              <h6>+49 01231595</h6>{" "}
            </div>
            <div class="info">
              <h6>little.lemon@gmail.com</h6>
            </div>
          </div>
        </div>
        <div class="footer-col-text">
          <h6>Navigation</h6>
          <a href="">idk</a> <a href="">idk</a>
          <a href="">idk</a> <a href="">idk</a>
          <a href="">idk</a>
        </div>
        <div class="footer-col-text">
          <h6>Navigation</h6>
          <a href="">idk</a> <a href="">idk</a>
          <a href="">idk</a> <a href="">idk</a>
          <a href="">idk</a>
        </div>
        <div class="footer-col-text">
          <h6>Navigation</h6>
          <a href="">idk</a> <a href="">idk</a>
          <a href="">idk</a> <a href="">idk</a>
          <a href="">idk</a>
        </div>
      </div>
    </div>
  );
}
