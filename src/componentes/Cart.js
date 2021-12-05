import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import db from "../utils/fireBase";
import { updateDoc ,setDoc, doc, collection, increment } from "firebase/firestore";


const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: { nombre: "Juan", apellido: "Perez", email: "Messi@gmail.com" },
            items: test.cartList.map(item => ({
                id: item.itemId,
                title: item.itemName,
                price: item.itemPrice,
            })),
            total: test.calculateTotalPrice()
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => alert(result.id))
            .catch(error => alert(error));

        test.cartList.forEach(async(item) => {
            const itemRef= doc(db, "products", item.itemId);
            await updateDoc(itemRef, {
                stock: increment(-item.itemQty)
            });
        });

        test.removeCartList();
    }

    
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
                                        <p className="letter-2">{produc.itemMarca}</p>
                                        <p className="letter">{produc.itemName}</p>
                                        <p className="letter">${produc.itemPrice} por prenda</p>
                                        <p className="letter">Unidades: {produc.itemQty}</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="text-center letter-2">${test.calculateTotalItems(produc.itemPrice, produc.itemQty)}</p>
                                        <img src="https://icon-library.com/images/trash-can-icon-black-and-white/trash-can-icon-black-and-white-20.jpg" className="logo-tacho" onClick={() => test.deleteItem(produc.itemId)} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                {
                    test.cartList.length > 0 &&
                    <div className="col-3 d-flex flex-column align-items-center second-cart finally-cart">
                        <p className="text-center pedido">TU COMPRA</p>
                        <div className="d-flex tu-compra justify-content-around">
                            <div>
                                <p className="letter">Subtotal:</p>
                                <p className="letter">IVA:</p>
                                <p className="letter-3">Total:</p>
                            </div>
                            <div>
                                <p className="letter">${test.calculateSubTotalPrice()}</p>
                                <p className="letter">${test.calculateTax()}</p>
                                <p className="letter-3">${test.calculateTotalPrice()}</p>
                            </div>
                        </div>
                        <button className="button-cart-2" onClick={createOrder}>Checkout</button>

                    </div>
                }
            </div>
        </div>

    )
}

export default Cart;