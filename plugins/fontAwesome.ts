import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faLinkedinIn,
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  far,
  faStar,
  faCopyright,
  faHandPointRight,
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  fas,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const definitions = [
  fab,
  far,
  fas,
  faBars,
  faStar,
  faCopyright,
  faLinkedinIn,
  faChevronLeft,
  faChevronRight,
  faFacebookSquare,
  faInstagram,
  faCalendarAlt,
  faHandPointRight,
];

library.add(...definitions);
