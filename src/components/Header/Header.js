import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ isSecondary = false }) => {
  return (
    <>
      <header className={`Header ${isSecondary ? "Header_secondary" : ""}`}>
        <div className="Header-Inner">
          <Link to={"/"}>
            <svg
              width="120"
              height="24"
              viewBox="0 0 120 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4453 14.5078H5.33203L4.10156 18H0.503906L6.73828 1.06641H11.0391L17.2734 18H13.6758L12.4453 14.5078ZM11.4141 11.5664L8.89453 4.38281L6.36328 11.5664H11.4141ZM24.9023 18.2227C23.957 18.2227 23.0859 18.0742 22.2891 17.7773C21.5 17.4727 20.8164 17.0469 20.2383 16.5C19.668 15.9453 19.2227 15.2852 18.9023 14.5195C18.5898 13.7539 18.4336 12.9023 18.4336 11.9648C18.4336 11.0273 18.5898 10.1758 18.9023 9.41016C19.2227 8.63672 19.668 7.98047 20.2383 7.44141C20.8164 6.89453 21.5 6.47266 22.2891 6.17578C23.0859 5.87109 23.957 5.71875 24.9023 5.71875C25.668 5.71875 26.375 5.81641 27.0234 6.01172C27.6797 6.20703 28.2617 6.49219 28.7695 6.86719C29.2852 7.24219 29.7148 7.70703 30.0586 8.26172C30.4102 8.80859 30.6602 9.4375 30.8086 10.1484L27.6914 10.4883C27.5039 9.76172 27.1641 9.23047 26.6719 8.89453C26.1797 8.55078 25.5781 8.37891 24.8672 8.37891C24.4141 8.37891 23.9961 8.46484 23.6133 8.63672C23.2383 8.80859 22.918 9.05078 22.6523 9.36328C22.3867 9.67578 22.1797 10.0547 22.0312 10.5C21.8828 10.9375 21.8086 11.4258 21.8086 11.9648C21.8086 12.5039 21.8828 12.9922 22.0312 13.4297C22.1797 13.8672 22.3867 14.2461 22.6523 14.5664C22.918 14.8789 23.2383 15.1211 23.6133 15.293C23.9961 15.4648 24.4141 15.5508 24.8672 15.5508C25.5781 15.5508 26.1797 15.3789 26.6719 15.0352C27.1641 14.6914 27.5039 14.1602 27.6914 13.4414L30.8086 13.7812C30.6602 14.4922 30.4102 15.125 30.0586 15.6797C29.707 16.2266 29.2734 16.6914 28.7578 17.0742C28.2422 17.4492 27.6562 17.7344 27 17.9297C26.3438 18.125 25.6445 18.2227 24.9023 18.2227ZM45.082 5.95312V18H41.8828L41.8008 16.4297C41.6289 16.7266 41.4102 16.9922 41.1445 17.2266C40.8867 17.4531 40.5938 17.6445 40.2656 17.8008C39.9375 17.957 39.582 18.0742 39.1992 18.1523C38.8242 18.2383 38.4297 18.2812 38.0156 18.2812C37.2188 18.2812 36.4688 18.1406 35.7656 17.8594C35.0625 17.5703 34.4453 17.1562 33.9141 16.6172C33.3906 16.0781 32.9766 15.4219 32.6719 14.6484C32.3672 13.8672 32.2148 12.9844 32.2148 12C32.2148 11.0156 32.3672 10.1367 32.6719 9.36328C32.9844 8.58203 33.4023 7.92188 33.9258 7.38281C34.457 6.84375 35.0742 6.43359 35.7773 6.15234C36.4805 5.86328 37.2266 5.71875 38.0156 5.71875C38.8125 5.71875 39.5352 5.86328 40.1836 6.15234C40.8398 6.44141 41.3477 6.85938 41.707 7.40625V5.95312H45.082ZM38.7891 15.4805C39.2344 15.4805 39.6523 15.3984 40.043 15.2344C40.4336 15.0703 40.7695 14.8359 41.0508 14.5312C41.3398 14.2266 41.5664 13.8594 41.7305 13.4297C41.8945 13 41.9766 12.5234 41.9766 12C41.9766 11.4688 41.8945 10.9883 41.7305 10.5586C41.5664 10.1289 41.3398 9.76172 41.0508 9.45703C40.7695 9.15234 40.4336 8.91797 40.043 8.75391C39.6523 8.58984 39.2344 8.50781 38.7891 8.50781C38.3438 8.50781 37.9258 8.58984 37.5352 8.75391C37.1445 8.91016 36.8047 9.14062 36.5156 9.44531C36.2266 9.74219 36 10.1094 35.8359 10.5469C35.6719 10.9766 35.5898 11.4609 35.5898 12C35.5898 12.5391 35.6719 13.0234 35.8359 13.4531C36 13.8828 36.2266 14.25 36.5156 14.5547C36.8047 14.8516 37.1445 15.082 37.5352 15.2461C37.9258 15.4023 38.3438 15.4805 38.7891 15.4805ZM60.0117 0V18H56.8125L56.7305 16.4531C56.5586 16.7578 56.3398 17.0234 56.0742 17.25C55.8164 17.4766 55.5234 17.668 55.1953 17.8242C54.8672 17.9727 54.5117 18.0859 54.1289 18.1641C53.7461 18.2422 53.3477 18.2812 52.9336 18.2812C52.1445 18.2812 51.3984 18.1406 50.6953 17.8594C49.9922 17.5703 49.375 17.1562 48.8438 16.6172C48.3203 16.0781 47.9062 15.4219 47.6016 14.6484C47.2969 13.8672 47.1445 12.9844 47.1445 12C47.1445 11.0156 47.2969 10.1367 47.6016 9.36328C47.9062 8.58203 48.3203 7.92188 48.8438 7.38281C49.375 6.84375 49.9922 6.43359 50.6953 6.15234C51.3984 5.86328 52.1445 5.71875 52.9336 5.71875C53.7305 5.71875 54.457 5.85938 55.1133 6.14062C55.7695 6.41406 56.2773 6.83203 56.6367 7.39453L56.6484 0H60.0117ZM53.7188 15.4805C54.1641 15.4805 54.582 15.4023 54.9727 15.2461C55.3633 15.082 55.6992 14.8516 55.9805 14.5547C56.2695 14.2578 56.4961 13.8945 56.6602 13.4648C56.8242 13.0273 56.9062 12.5391 56.9062 12C56.9062 11.4531 56.8242 10.9648 56.6602 10.5352C56.4961 10.1055 56.2695 9.74219 55.9805 9.44531C55.6992 9.14062 55.3633 8.91016 54.9727 8.75391C54.582 8.58984 54.1641 8.50781 53.7188 8.50781C53.2734 8.50781 52.8555 8.58984 52.4648 8.75391C52.0742 8.91016 51.7344 9.14062 51.4453 9.44531C51.1562 9.74219 50.9297 10.1094 50.7656 10.5469C50.6016 10.9766 50.5195 11.4609 50.5195 12C50.5195 12.5391 50.6016 13.0234 50.7656 13.4531C50.9297 13.8828 51.1562 14.25 51.4453 14.5547C51.7344 14.8516 52.0742 15.082 52.4648 15.2461C52.8555 15.4023 53.2734 15.4805 53.7188 15.4805ZM74.6367 12.6094H65.707C65.7461 13.1094 65.8516 13.5469 66.0234 13.9219C66.1953 14.2891 66.418 14.5977 66.6914 14.8477C66.9727 15.0898 67.293 15.2734 67.6523 15.3984C68.0117 15.5156 68.3906 15.5742 68.7891 15.5742C69.3984 15.5742 69.9258 15.4375 70.3711 15.1641C70.8242 14.8906 71.1641 14.4844 71.3906 13.9453L74.4844 14.4023C74.2891 15.0117 74.0078 15.5547 73.6406 16.0312C73.2812 16.5078 72.8555 16.9102 72.3633 17.2383C71.8711 17.5586 71.3242 17.8047 70.7227 17.9766C70.1289 18.1484 69.4922 18.2344 68.8125 18.2344C67.8438 18.2344 66.9609 18.0938 66.1641 17.8125C65.375 17.5312 64.6992 17.125 64.1367 16.5938C63.5742 16.0547 63.1406 15.3984 62.8359 14.625C62.5312 13.8516 62.3789 12.9688 62.3789 11.9766C62.3789 10.9844 62.5352 10.1016 62.8477 9.32812C63.1602 8.54688 63.5938 7.88672 64.1484 7.34766C64.7109 6.80859 65.3789 6.39844 66.1523 6.11719C66.9258 5.83594 67.7773 5.69531 68.707 5.69531C69.5586 5.69531 70.3477 5.81641 71.0742 6.05859C71.8008 6.30078 72.4297 6.67188 72.9609 7.17188C73.4922 7.66406 73.9102 8.29688 74.2148 9.07031C74.5195 9.83594 74.6719 10.7461 74.6719 11.8008L74.6367 12.6094ZM68.7305 8.08594C67.9883 8.08594 67.3672 8.25781 66.8672 8.60156C66.375 8.9375 66.0352 9.47266 65.8477 10.207H71.3086C71.1836 9.49609 70.8867 8.96484 70.418 8.61328C69.957 8.26172 69.3945 8.08594 68.7305 8.08594ZM91.3359 5.71875C91.9844 5.71875 92.5664 5.80078 93.082 5.96484C93.6055 6.12891 94.0508 6.37109 94.418 6.69141C94.793 7.00391 95.0781 7.39844 95.2734 7.875C95.4766 8.34375 95.5781 8.88672 95.5781 9.50391V18H92.2148V10.4648C92.2148 10.1133 92.1641 9.80859 92.0625 9.55078C91.9609 9.29297 91.8203 9.08203 91.6406 8.91797C91.4688 8.74609 91.2656 8.62109 91.0312 8.54297C90.8047 8.46484 90.5625 8.42578 90.3047 8.42578C90.0078 8.42578 89.7227 8.47266 89.4492 8.56641C89.1758 8.66016 88.9336 8.81641 88.7227 9.03516C88.5195 9.24609 88.3555 9.53125 88.2305 9.89062C88.1055 10.2422 88.043 10.6797 88.043 11.2031V18H84.6211V10.5C84.6211 10.1406 84.5703 9.83203 84.4688 9.57422C84.3672 9.30859 84.2266 9.09375 84.0469 8.92969C83.875 8.75781 83.6719 8.63281 83.4375 8.55469C83.2109 8.46875 82.9648 8.42578 82.6992 8.42578C82.4102 8.42578 82.1289 8.47266 81.8555 8.56641C81.582 8.66016 81.3398 8.82422 81.1289 9.05859C80.918 9.28516 80.7461 9.58984 80.6133 9.97266C80.4883 10.3477 80.4258 10.8164 80.4258 11.3789V18H77.0742V5.95312H80.4258V7.37109C80.8242 6.83203 81.3203 6.42188 81.9141 6.14062C82.5078 5.85938 83.1758 5.71875 83.918 5.71875C84.8008 5.71875 85.5547 5.875 86.1797 6.1875C86.8125 6.49219 87.293 6.9375 87.6211 7.52344C88.043 6.91406 88.5664 6.46094 89.1914 6.16406C89.8242 5.86719 90.5391 5.71875 91.3359 5.71875ZM110.18 5.95312V17.5547C110.18 18.6719 110.043 19.6172 109.77 20.3906C109.504 21.1719 109.113 21.8047 108.598 22.2891C108.09 22.7734 107.469 23.125 106.734 23.3438C106 23.5703 105.164 23.6836 104.227 23.6836C103.352 23.6836 102.582 23.5977 101.918 23.4258C101.262 23.2539 100.695 23.0117 100.219 22.6992C99.7422 22.3945 99.3516 22.0273 99.0469 21.5977C98.7422 21.1758 98.5078 20.707 98.3438 20.1914L101.285 19.0312C101.402 19.4531 101.547 19.8008 101.719 20.0742C101.898 20.3477 102.109 20.5625 102.352 20.7188C102.594 20.8828 102.871 20.9961 103.184 21.0586C103.496 21.1211 103.844 21.1523 104.227 21.1523C105.039 21.1523 105.668 20.9414 106.113 20.5195C106.559 20.1055 106.781 19.4023 106.781 18.4102V16.5117C106.359 17.0039 105.832 17.3867 105.199 17.6602C104.566 17.9258 103.855 18.0586 103.066 18.0586C101.613 18.0586 100.5 17.6992 99.7266 16.9805C98.9609 16.2617 98.5781 15.2305 98.5781 13.8867V5.95312H101.965V13.1602C101.965 13.5586 102.023 13.8984 102.141 14.1797C102.258 14.4609 102.414 14.6875 102.609 14.8594C102.805 15.0312 103.031 15.1562 103.289 15.2344C103.555 15.3125 103.832 15.3516 104.121 15.3516C104.473 15.3516 104.809 15.3047 105.129 15.2109C105.449 15.1094 105.73 14.9453 105.973 14.7188C106.223 14.4922 106.418 14.1914 106.559 13.8164C106.707 13.4414 106.781 12.9766 106.781 12.4219V5.95312H110.18ZM116.484 18.3125C116.068 18.3125 115.672 18.2292 115.297 18.0625C114.932 17.9062 114.609 17.6875 114.328 17.4062C114.047 17.125 113.823 16.8021 113.656 16.4375C113.49 16.0625 113.406 15.6667 113.406 15.25C113.406 14.8229 113.49 14.4219 113.656 14.0469C113.823 13.6719 114.047 13.3438 114.328 13.0625C114.609 12.7812 114.932 12.5573 115.297 12.3906C115.672 12.224 116.068 12.1406 116.484 12.1406C116.911 12.1406 117.312 12.224 117.688 12.3906C118.062 12.5573 118.391 12.7812 118.672 13.0625C118.953 13.3438 119.177 13.6719 119.344 14.0469C119.51 14.4219 119.594 14.8229 119.594 15.25C119.594 15.6667 119.51 16.0625 119.344 16.4375C119.177 16.8021 118.953 17.125 118.672 17.4062C118.391 17.6875 118.062 17.9062 117.688 18.0625C117.312 18.2292 116.911 18.3125 116.484 18.3125Z"
                fill="white"
              />
            </svg>
          </Link>

          <svg
            className="Header-Hamburger"
            width="448"
            height="392"
            viewBox="0 0 448 392"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 72H432C440.837 72 448 64.837 448 56V16C448 7.163 440.837 0 432 0H16C7.163 0 0 7.163 0 16V56C0 64.837 7.163 72 16 72ZM16 232H432C440.837 232 448 224.837 448 216V176C448 167.163 440.837 160 432 160H16C7.163 160 0 167.163 0 176V216C0 224.837 7.163 232 16 232ZM16 392H432C440.837 392 448 384.837 448 376V336C448 327.163 440.837 320 432 320H16C7.163 320 0 327.163 0 336V376C0 384.837 7.163 392 16 392Z"
              fill="black"
            />
          </svg>
          <nav className="Header-Nav">
            <Link to={"/courses"} className="Header-Link">
              Courses
            </Link>

            <Button className="Header-Button">Sign In</Button>
            <Button className="Header-Button" isSecondary>
              Register
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  isSecondary: PropTypes.bool,
};

export default Header;
