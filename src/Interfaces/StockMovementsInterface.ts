import { ProductStockInterface } from "./ProductTypeInterface"
import { TypeStockMovementInterface } from "./AcquisitionInterface"

export interface StockMovementsInterface {
    id: number,
    product_stock_id: number,
    type_stock_movement_id: number,
    quantity: number,
    created_at: string,
    updated_at: string
    product_stock: ProductStockInterface
    type_stock_movement: TypeStockMovementInterface
}
