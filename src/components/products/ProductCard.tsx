import * as React from "react"
import {IProduct} from "../../redux/features/products/productTypes";
import {Button, Card, Group, Text, useMantineTheme} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/app/store";
import {deleteProductThunk} from "../../redux/features/products/productSlice";
import {capitalizeFirstLetterOf} from "../../util";

interface IProps {
    product: IProduct
}

const ProductCard: React.FC<IProps> = ({product}) => {
    const theme = useMantineTheme();

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleDelete = (product: IProduct) => {
        if (product.id) {
            dispatch(deleteProductThunk(product))
        }
    }
    const handleClick = () => {
        navigate("/dashboard/receipt")
    }

    return <>
        <div>
            <Card shadow="sm" p="lg">
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>{capitalizeFirstLetterOf(product.name)} - ${product.price}</Text>
                    <Button onClick={() => handleDelete(product)} color='red' compact>Delete</Button>
                </Group>

                <Text size="sm" style={{lineHeight: 1.5}}>
                    {product.description}
                </Text>
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>Min</Text>
                    <Text weight={700}>Stock</Text>
                    <Text weight={500}>Max</Text>
                </Group>
                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>{product.min}</Text>
                    <Text weight={500}>{product.stock}</Text>
                    <Text weight={500}>{product.max}</Text>
                </Group>

                <Button onClick={handleClick} variant="light" color="blue" fullWidth style={{marginTop: 14}}>
                    Manage
                </Button>
            </Card>
        </div>
    </>
}

export default ProductCard


