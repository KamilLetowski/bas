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
} from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const definitions = [
  fab,
  far,
  faBars,
  faStar,
  faCopyright,
  faLinkedinIn,
  faFacebookSquare,
  faInstagram,
  faHandPointRight,
];

library.add(...definitions);
