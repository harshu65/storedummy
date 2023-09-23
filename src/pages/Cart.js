import { useContext } from "react";
import { Cartcontext } from "../context/Context";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return (total + item.price * item.quantity);
  }, 0);

  let itemno = state.length;

  if (state.length === 0) {
    return <div className="h-[58vh] my-4  mt-12 capitalize text-center  text-slate-300
    text-4xl capitalize font-bold tracking-tight items-center flex justify-center flex">Cart is Empty!</div>
  }
  return (
    <>
      <h2 className='my-4  mt-12 capitalize text-center  text-slate-300
 text-7xl capitalize font-bold tracking-tight'>add products to cart</h2>
      {state.map((item, index) => {
        return (
          <>
            <div class="mt-5 max-w-sm w-full lg:max-w-full lg:flex justify-center" key={index}>
              <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ 'backgroundImage': `url("${item.thumbnail}")` }} >
              </div>
              <div class="text-left border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-black  p-4 flex flex-col justify-between leading-normal"
                style={{ width: "643px" }}>
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center capitalize">
                    <i class="fa fa-archive pl-0" aria-hidden="true"></i>
                    {item.category}
                  </p>
                  <div class="text-gray-400 font-bold text-2xl mb-2">{item.title}</div>
                  <p class="text-gray-500 text-base">{item.description}</p>
                </div>
              </div>

              <div class=" text-white border-white border border-l-0 h-48 grid justify-center items-center lg:h-auto lg:w-48 bg-black rounded-b lg:rounded-b-none lg:rounded-r" >
                <div className="quantity flex my-4">
                  <button className="px-4 border border-purple-800 rounded fs-4 hover:bg-purple-800 hover:text-white text-xl"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}>
                    -
                  </button>
                  <p className="mx-4 text-lg">{item.quantity}</p>
                  <button className="px-4 border border-purple-800 rounded fs-4 hover:bg-purple-800 hover:text-white text-xl"
                    onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                    +
                  </button>

                </div>
                <p className="px-4 text-lg">Price: ₹{item.price}</p>
                <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  className="display-2 cursor-pointer  text-4xl text-red-600" role="button">
                  x
                </h2>
              </div>
            </div>

          </>
        )
      })}
      <div className="totalp text-slate-200 text-right text-xl ">
        <p>Total Items: {itemno}</p>
        <p>Total Amount: ₹{total}</p>
      </div>
    </>

  );
};

export default Cart
