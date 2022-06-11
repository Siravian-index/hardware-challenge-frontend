import * as React from "react"
import {useSelector} from "react-redux";
import {selectProductList} from "../../redux/features/products/productSlice";
import {Alert} from "@mantine/core";
import {AlertCircle} from "tabler-icons-react";

interface IProps {
}

const AlertLowSupply: React.FC<IProps> = () => {
    const productList = useSelector(selectProductList())
    const productLowOnStock = productList.filter(p => p.stock <= p.min).map(p => p.name)
    return <>
        {
            (productLowOnStock.length > 0) &&
            <Alert icon={<AlertCircle size={16}/>} title="Low Supply" color="yellow">
                {productLowOnStock.join(", ")}
            </Alert>

        }


    </>
}

export default AlertLowSupply


