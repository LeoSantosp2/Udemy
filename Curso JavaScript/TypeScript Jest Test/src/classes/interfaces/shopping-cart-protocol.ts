import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
    item: Readonly<CartItem[]>;

    addItems(item: CartItem): void;

    removeItem(index: number): void;

    total(): number;

    totalWithDiscount(): number;

    isEmpty(): boolean;

    clear(): void;
}
