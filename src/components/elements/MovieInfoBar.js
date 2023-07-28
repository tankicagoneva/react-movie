import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMoneyBill,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { calcTime, convertMoney } from "../../helpers";
import PropTypes from "prop-types";
import { StyledMovieInfoBar } from "../styles/StyledMovieInfoBar";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesomeIcon
          icon={faClock}
          style={{ color: "#ffffff" }}
          size="2x"
        />
        <span className="movieinfobar-info">
          Running time: {calcTime(time)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesomeIcon
          icon={faMoneyBill}
          size="2x"
          style={{ color: "#ffffff" }}
        />
        <span className="movieinfobar-info">
          Budget: {convertMoney(budget)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesomeIcon
          icon={faTicket}
          size="2x"
          style={{ color: "#ffffff" }}
        />
        <span className="movieinfobar-info">
          Revenue:{convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
