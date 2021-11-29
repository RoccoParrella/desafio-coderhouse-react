import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div className="d-flex flex-column container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    {test.cartList.length > 0
                        ? <><p className="text-center pedido">TU PEDIDO</p>
                            <div className="separacion"></div>
                            <div className="">
                                <span className="pedido-2 ">Usted esta llevando</span>
                                <br />
                                <span className="pedido-3">{test.cartList.length} Productos</span>
                            </div>
                        </>
                        : <><p className="text-center pedido">SU CARRITO ESTA VACIO</p>
                            <div className="separacion"></div>
                            <span className="pedido-4">Para continuar agregue productos al carrito!</span>
                        </>}
                </div>
                <div className="">
                    {
                        test.cartList.length > 0
                            ? <div className="d-flex">
                                <Link to="/"><button className="button-cart">Seguir comprando</button></Link>
                                <button className="button-cart" onClick={() => test.removeCartList()}>Vaciar carrito</button>
                            </div>
                            : <div className="d-flex">
                                <Link to="/"><button className="button-cart">Seguir comprando</button></Link>
                            </div>
                    }
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <div className="col-8">
                {
                    test.cartList.length > 0 &&
                    test.cartList.map(produc =>
                        <div className="main-cart">
                            <div className="d-flex align-items-center justify-content-around col-12 card-item">
                                <div>
                                    <img className="img-cart" src={produc.itemImg} alt={produc.itemName}></img>
                                </div>
                                <div>
                                    <p className="letter-1">{produc.itemMarca}</p>
                                    <p className="letter-2">{produc.itemName}</p>
                                    <p>${produc.itemPrice} por prenda</p>
                                    <p>Unidades: {produc.itemQty}</p>
                                </div>
                                <div>
                                    <p className="text-center">${test.calculateTotalItems(produc.itemPrice, produc.itemQty)}</p>
                                    <button className="button-cart" onClick={() => test.deleteItem(produc.itemId)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>

                {
                test.cartList.length > 0 &&
                <div className="col-3 second-cart finally-cart">
                    <p className="text-center pedido">TU COMPRA</p>
                    <div className="d-flex tu-compra justify-content-around">
                        <div>
                            <p>Subtotal:</p>
                            <p>IVA:</p>
                            <p>Total:</p>
                        </div>
                        <div>
                            <p>${test.calculateSubTotalPrice()}</p>
                            <p>${test.calculateTax()}</p>
                            <p>${test.calculateTotalPrice()}</p>
                        </div>
                    </div>
                    
                </div>
                }
            </div>
        </div>
    )
}

export default Cart;