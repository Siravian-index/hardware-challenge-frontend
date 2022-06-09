import React, {useState} from 'react';
import {AppShell, Burger, Footer, Header, MediaQuery, Navbar, Text, useMantineTheme,} from '@mantine/core';
import {Link, Outlet} from "react-router-dom";

export default function AppShellMantine() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const navbarOptions = [{
        path: "/dashboard/providers",
        content: "Providers"
    }, {
        path: "/dashboard",
        content: "Products"
    }, {
        path: "/dashboard/receipt",
        content: "New Receipt"
    }]
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{sm: 200, lg: 300}}>
                    <Navbar.Section>
                        <Link to='/dashboard'>Products</Link>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Link to='/dashboard/providers'>Providers</Link>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Link to='/dashboard/provider'>Add Provider</Link>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Link to='/dashboard/receipts'>See Receipts</Link>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Link to='/dashboard/receipt'>New Receipt</Link>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Link to='/dashboard/bills'>See Bills</Link>
                    </Navbar.Section>
                </Navbar>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                        <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Don Raul's Hardware Store</Text>
                    </div>
                </Header>
            }
        >
            {/*this should render an outlet*/}
            <Outlet/>
        </AppShell>
    );
}