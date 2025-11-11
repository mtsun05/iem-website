import iemwhite from "../assets/iem-logo-white.svg";
import teamicon from "../assets/teams-icon.svg";
import joinicon from "../assets/join-icon.svg";
import sponsors from "../assets/sponsors-icon.svg";
import shake from "../assets/shake.svg";

export const aboutContent = {
  labels: ["About Us", "Teams", "Join"],
  subtitles: [
    "Find out more about our organization and leads",
    "Discover our subteams, find where you belong",
    "Get all the information you need to join",
  ],
  links: ["/about", "/teams", "/join"],
  content: [iemwhite, teamicon, joinicon],
};

export const sponsorContent = {
  labels: ["Our Sponsors", "Become a Sponsor"],
  subtitles: [
    "Browse the list of our generous sponsors",
    "Get the how and why to partner with IEM",
  ],
  links: ["/sponsors", "/sponsor-info"],
  content: [sponsors, shake],
};
