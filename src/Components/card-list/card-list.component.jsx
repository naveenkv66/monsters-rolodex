import { Component } from "react";
//import Card from './Components/card/card.component'
import './card-list.style.css'
import Card from "../card/card.component";


const CardList = ({ monsters }) =>
(
    <div className="card-list">
        {
            monsters.map(monster =>
            {

                return <Card monster={monster} key={monster.id} ></Card>

            })
        }
    </div >

)

// class CardList1 extends Component
// {
//     render()
//     {
//         const { monsters } = this.props;
//         return (

//             <div className="card-list">
//                 {
//                     monsters.map(monster =>
//                     {

//                         return <Card monster={monster} key={monster.id} ></Card>

//                     })
//                 }
//             </div >

//         );



//     }
// }

export default CardList;