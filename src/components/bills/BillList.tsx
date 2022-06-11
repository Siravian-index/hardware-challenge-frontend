import * as React from "react"
import {useEffect} from "react"
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/app/store";
import {fetchStatus} from "../../redux/features/generalTypes";
import {SimpleGrid} from "@mantine/core";
import {getBillsThunk, selectBillList, selectBillStatus} from "../../redux/features/bill/billSlice";
import BillCard from "./BillCard";

interface IProps {}

const BillList : React.FC<IProps> = () => {
    const bills = useSelector(selectBillList())
    const status = useSelector(selectBillStatus())
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getBillsThunk())
        }
    }, [])

    const content = bills.map(bill => <BillCard key={bill.id} bill={bill} />).reverse()

    return <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
            {maxWidth: 980, cols: 3, spacing: 'md'},
            {maxWidth: 755, cols: 2, spacing: 'sm'},
            {maxWidth: 600, cols: 1, spacing: 'sm'},
        ]}>
        {content}
    </SimpleGrid>
}

export default BillList


