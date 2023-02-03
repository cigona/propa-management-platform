
import { Navbar, Group, Code, ScrollArea, createStyles, Button, Space } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons';
import { LinksGroup } from './LinksGroup';


const mockdata = [
  { label: 'Home', icon: IconGauge },
  {
    label: 'Manage',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Properties', link: '/' },
      { label: 'Units', link: '/' },
    ],
  },
  {
    label: 'Tenants',
    icon: IconCalendarStats,
    links: [
      { label: 'New', link: '/' },
      { label: 'Manage', link: '/' },
    ],
  },
  { label: 'People', icon: IconPresentationAnalytics },
  { label: 'Accounting', icon: IconFileAnalytics },
  { label: 'Reports', icon: IconAdjustments },
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
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
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
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function SideNav() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Button variant='outline' fullWidth color='dark'>Quick Add</Button>
        <Space h='md'/>
        <Button variant='outline' fullWidth color='dark'>Get started checklist</Button>
        <Space h='md'/>
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
