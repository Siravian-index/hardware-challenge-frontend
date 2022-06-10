import React, {useEffect, useState} from 'react';
import {
    Anchor,
    AppShell,
    Burger, Divider,
    Footer,
    Header,
    MediaQuery,
    Navbar,
    Text,
    Title,
    useMantineTheme,
} from '@mantine/core';
import {Link, Outlet} from "react-router-dom";
import {getProductsThunk} from "../../redux/features/products/productSlice";
import {useAppDispatch} from "../../redux/app/store";
import {getBillsThunk} from "../../redux/features/bill/billSlice";
import {getProvidersThunk} from "../../redux/features/provider/providerSlice";
import {getReceiptsThunk} from "../../redux/features/receipt/receiptSlice";

export default function AppShellMantine() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    //dispatch get
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProductsThunk())
        dispatch(getBillsThunk())
        dispatch(getProvidersThunk())
        dispatch(getReceiptsThunk())
    }, [])
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
                        <Anchor component={Link} to='/dashboard'>Products</Anchor>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Anchor component={Link} to='/dashboard/providers'>Providers</Anchor>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Anchor component={Link} to='/dashboard/receipts'>Receipts</Anchor>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Anchor component={Link} to='/dashboard/bills'>Bills</Anchor>
                    </Navbar.Section>
                    <Divider/>
                    <Navbar.Section>
                        <Anchor component={Link} to='/dashboard/product'>New Product</Anchor>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Anchor component={Link} to='/dashboard/provider'>Add Provider</Anchor>
                    </Navbar.Section>

                    <Navbar.Section>
                        <Anchor component={Link} to='/dashboard/receipt'>New Receipt</Anchor>
                    </Navbar.Section>

                    <Navbar.Section>
                        <Anchor component={Link} to='/dashboard/bill'>New Bills</Anchor>
                    </Navbar.Section>
                    <Divider/>

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

                        <Title order={3}>Don Raul's Hardware Store</Title>
                    </div>
                </Header>
            }
        >
            {/*this should render an outlet*/}
            <Outlet/>
        </AppShell>
    );
}