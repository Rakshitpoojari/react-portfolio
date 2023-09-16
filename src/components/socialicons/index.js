import React from "react";
import "./style.css";
import {
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.Whatsapp && (
          <li>
            <a href={socialprofils.Whatsapp} target="blank">
              <FaWhatsapp />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.Instagram && (
          <li>
            <a href={socialprofils.Instagram} target="blank">
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="blank">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
