import {
  clients_logo_facebook,
  clients_logo_google,
  clients_logo_linkedin,
  clients_logo_youtube,
  logo_facebook,
  logo_twitter,
  logo_instagram,
  logo_google
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "about-us",
    title: "About Us",
    link: "/about",
  },
];

export const clients = [
    {
        id: '1',
        logo: clients_logo_facebook
    },
    {
        id: '2',
        logo: clients_logo_google
    },
    {
        id: '3',
        logo: clients_logo_youtube
    },
    {
        id: '4',
        logo: clients_logo_linkedin
    },
]

export const featuredCompanies = [
  {
    id: '1',
    logo: logo_facebook,
    title: 'Facebook',
    type: 'Social Network'
},
{
    id: '2',
    logo: logo_twitter,
    title: 'Twitter',
    type: 'Social Network'
},
{
    id: '3',
    logo: logo_instagram,
    title: 'Instagram',
    type: 'Social Network'
},
{
    id: '4',
    logo: logo_google,
    title: 'Google',
    type: 'Technology'
},
]