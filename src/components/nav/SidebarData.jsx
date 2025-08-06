import {
  HomeIcon,
  PersonIcon,
  EnvelopeClosedIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";

export const SidebarData = [
  {
    title: 'Login',
    path: '/messages',
    icon: <PersonIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Celulas',
    path: './HomeCelulas',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Fórum',
    path: './FAQs',
    icon: <EnvelopeClosedIcon />,
    cName: 'nav-text'
  },
  
  {
    title: 'Materiais',
    path: '/support',
    icon: <QuestionMarkCircledIcon />,
    cName: 'nav-text'
  },
   {
    title: 'Testemunhos',
    path: '/support',
    icon: <QuestionMarkCircledIcon />,
    cName: 'nav-text'
  },
   {
    title: 'Sobre nós',
    path: '/support',
    icon: <QuestionMarkCircledIcon />,
    cName: 'nav-text'
  },
   {
    title: 'Pedidos de Oração',
    path: '/support',
    icon: <QuestionMarkCircledIcon />,
    cName: 'nav-text'
  }
];
