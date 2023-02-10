import { ProductInterface } from "./ProductInterface"

export interface AcquisitionInterface {
    id: number,
    product: ProductInterface
    products_total_value: number,
    tax_total_value: number,
    acquisition_total_value: number
}