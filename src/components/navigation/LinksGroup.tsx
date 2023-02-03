import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles } from '@mantine/core';
import {  IconCalendarStats, IconChevronLeft, IconChevronRight } from '@tabler/icons';
import { CaretDown, CaretRight } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface LinksGroupProps {
    icon: any;
    label: string;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
    link: string
  }
  
  export function LinksGroup({  icon, label, initiallyOpened,link, links }: LinksGroupProps) {
    const { classes, theme } = useStyles();
    const hasLinks = Array.isArray(links);
    const [opened, setOpened] = useState(initiallyOpened || false);
    const navigate = useNavigate();

    const items = (hasLinks ? links : []).map((link) => (
      <Text<'a'>
        component="a"
        className={classes.link}
        href={link.link}
        key={link.label}
        onClick={(event) => {event.preventDefault(); navigate(link.link)}}
      >
        {link.label}
      </Text>
    ));
  
    return (
      <>
        <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
          <Group onClick={() => {!hasLinks && navigate(link)}} position="apart" spacing={0}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {icon}
              <Box  ml="md">{label}</Box>
            </Box>
            {hasLinks && (
              <CaretRight
                className={classes.chevron}
                size={14}
                style={{
                  transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
                }}
              />
            )}
          </Group>
        </UnstyledButton>
        {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
      </>
    );
  }