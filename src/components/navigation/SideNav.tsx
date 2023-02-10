
import { Navbar, Image, ScrollArea, createStyles, Button, Space, MediaQuery } from '@mantine/core';
import { Buildings, House, Lightning, Money, Paperclip, Person, Plus, UsersThree } from 'phosphor-react';
import { LinksGroup } from './LinksGroup';
import Logo from '../../assets/logo.png'

const mockdata = [
  { label: 'Home', icon: <House />, link: '/' },
  {
    label: 'Manage',
    icon: <Buildings />,
    initiallyOpened: false,
    links: [
      { label: 'Properties', link: '/properties' },
      { label: 'Units', link: '/' },
    ],
    link: ''
  },
  {
    label: 'Tenants',
    icon: <UsersThree />,
    links: [
      { label: 'Active', link: '/tenants/active' },
      { label: 'Prospective', link: '/tenants/prospective' },
    ],
    link: ''
  },
  {
    label: 'People',
    icon: <Person />,
    links: [
      { label: 'Property Staff', link: '/' },
      { label: 'Vendors', link: '/' },
      { label: 'Owners', link: '/' },
      { label: 'Managers', link: '/' },
      { label: 'Agents', link: '/' },
    ],
    link: ''
  },
  { 
    label: 'Accounting', 
    icon: <Money />, 
    link: '',
    links: [
      { label: 'Transactions', link: '/' },
      { label: 'Balances', link: '/' },
      { label: 'Payments', link: '/' },
    ]
  },
  { label: 'Reports', icon: <Paperclip />, link: '' },
  { label: 'Communication', icon: <Paperclip />, link: '' },
  { label: 'Settings', icon: <Paperclip />, link: '' },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },
}));

export function SideNav() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar width={{ sm: 200, lg: 300 }} p="md" className={classes.navbar}>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <div style={{ width: 120, marginInline: 'auto' }}>
          <Image src={Logo} alt='logo' />
        </div>
      </MediaQuery>
      <Space h='lg'/>
      <Navbar.Section className={classes.header}>
        <Button leftIcon={<Lightning size={20} />} rightIcon={<Plus size={20} weight="bold" />} variant='outline' fullWidth color='dark'>Quick Add</Button>
        <Space h='md' />
        <Button sx={{ justifyContent: 'space-between' }} leftIcon={<Lightning size={20} />} variant='outline' fullWidth color='dark'>Get started checklist</Button>
        <Space h='md' />
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
      </Navbar.Section>
    </Navbar>
  );
}
export default SideNav
