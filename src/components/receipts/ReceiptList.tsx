import * as React from "react"
import {useSelector} from "react-redux";
import {getProductsThunk, selectProductList, selectProductStatus} from "../../redux/features/products/productSlice";
import {useAppDispatch} from "../../redux/app/store";
import {useEffect} from "react";
import {fetchStatus} from "../../redux/features/generalTypes";
import ProductCard from "../products/ProductCard";
import {SimpleGrid} from "@mantine/core";
import {getReceiptsThunk, selectReceiptList, selectReceiptStatus} from "../../redux/features/receipt/receiptSlice";
import ReceiptCard from "./ReceiptCard";

interface IProps {}

const ReceiptList : React.FC<IProps> = () => {
    const receipts = useSelector(selectReceiptList())
    const status = useSelector(selectReceiptStatus())
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getReceiptsThunk())
        }
    }, [])
    console.log(receipts)

    const content = receipts.map(receipt => <ReceiptCard key={receipt.id} receipt={receipt} />)

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

export default ReceiptList


