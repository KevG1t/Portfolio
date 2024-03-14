export interface NavItem {
  name: string
  label: string
  path: string
}

export type NavList = Array<NavItem>

export const navList: NavList = [
  {
    name: 'Home',
    label: 'home',
    path: '#home'
  },
  {
    name: 'About',
    label: 'about',
    path: '#about'
  },
  {
    name: 'Skills',
    label: 'skills',
    path: '#skills'
  },
  {
    name: 'Projects',
    label: 'projects',
    path: '#projects'
  },
  {
    name: 'Contact',
    label: 'contact',
    path: 'mailto:kevinantonioc13@gmail.com'
  }
]