import React from 'react';

function Card() {
    return (
        <div>
            {/*Tarjeta #1*/}
            <div className="card">
                {/*-- Imagen div--*/}
                <div>
                    <img className='w-full' src='https://picsum.photos/800/600' alt="naturaleza.jpg" />
                </div>
                <div className=" p-5 pb-8 pr-8">
                    <h1 className="font-bold pb-1 text-xl">The Green Tree</h1>
                    <p className="text-2xl text-green-600 sm:text-base sm:text-green-800">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident consequatur blanditiis aperiam
                        amet
                        dolores, sed iste atque tempore aspernatur ipsa, excepturi nesciunt ipsum repellat architecto quae,
                        minima voluptate nobis possimus!
                    </p>
                </div>
                <div className="pb-6 pl-1">
                    <button className="bg-slate-200 rounded-xl mx-1 py-0.5 px-2 ">
                        #photography
                    </button>
                    <button className="bg-slate-200 rounded-xl mx-1 py-0.5 px-2">
                        #travel
                    </button>
                    <button className="bg-slate-200 rounded-xl mx-1 py-0.5 px-2">
                        #winter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;

//--------
//rsc
//rsf