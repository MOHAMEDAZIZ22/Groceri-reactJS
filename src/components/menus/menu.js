import './menu.css';
import Menulist from './menulist';
import fruits from '../images/grocery.jpg';
import Bev from '../images/Bev.jpg'
import grocery from '../images/grocery.jpg';
import snack from '../images/snack.jpg';
import fash from '../images/fash.jpg';
import TopDeals from '../topdeals/topdeals';

function Menus() {
    const menus = [
        {
            id: 1,
            name: 'Fruits & Vegitable',
            images: fruits
        },
        {
            id: 2,
            name: 'Beverage',
            images: Bev
        },
        {
            id: 3,
            name: "groceries",
            images: grocery
        },
        {
            id: 4,
            name: "Fashion",
            images: fash

        },
        {
            id: 5,
            name: 'snacks',
            images: snack
        }
    ];
    return (
        <div className='menus'>
            <div className='mcontainer'>
                <div className='mWrapper'>

                    {
                        menus.map((items) => {
                            return <Menulist key={items.id} image={items.images} name={items.name}></Menulist>
                        })
                    }

                </div>
                <TopDeals></TopDeals>
            </div>

        </div>)

};
export default Menus;