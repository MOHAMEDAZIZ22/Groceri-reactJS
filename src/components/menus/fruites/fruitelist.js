import "./fruitelist.css";

import { useState, useEffect } from "react";
import FruitsItems from "./fruites";
import { useParams } from "react-router-dom";

function Fruitslist() {
    const [fruitsList,setFruitslist]=useState([]);
    const fetchlist=useParams();
    
    useEffect(() => {
        fetch('https://63159b6c33e540a6d37fdf21.mockapi.io/'+fetchlist.lists).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        })
            .then((data) => {
                setFruitslist(data)
            })
            
    }, []);
   
    

    return (<>
        <div className="fruits">
            <div className="fcontainer">
                <div className="fruitsWrapper">
                    {
                        fruitsList.map((items)=>{
                            return <FruitsItems key={items.id} items={items} name={items.name} event={items.event} image={items.image} price={items.price} offer={items.offer} qty={items.qty}></FruitsItems>
                        })
                    }
                </div>
            </div>
        </div>
    </>)
};
export default Fruitslist;
