import React from "react";
import Card from "./components/Card";

const App = () => {

    return (
        <div className="container mx-auto m-5">

            {/* <h2>CSS</h2>
            <button className="btn btn-blue btn-blue:hover">
                Boton</button>
            <div className="bg-orange-500 text-white">Hello World</div> */}
            <h1 className="w-auto text-4xl p-5 mb-5 font-bold text-center text-blue-900 bg-yellow-100 hover:bg-yellow-400">
                Carta Tailwind CSS con React
            </h1>
            <div className="flex -mx-2 flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3 px-2">
                    <Card />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-2">
                    <Card />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-2">
                    <Card />
                </div>
            </div>

        </div>

    )

}

export default App;