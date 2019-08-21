import React from "react"
import Card from "./Card"
var Cards = require("../Cards.json");

export default class CardContainer extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { filter: "news" };
        
      }




    render(){
        
        return (
            <React.Fragment>
        <div id="News" className="menu my-4 w-100 px-2"> <ul className="list-unstyled list-inline text-uppercase px-3 ">
            <li className="list-inline-item "><a href="#"><small className="bold">news</small></a></li>
            <li className="list-inline-item"><a href="#"><small className="bold">2019</small></a></li>
            <li className="list-inline-item"><a href="#"><small className="bold">events</small></a></li>
            <li className="list-inline-item"><a href="#"><small className="bold">2011-2018</small></a></li>
            <li className="list-inline-item float-right"><a href="#"><small className="bold" >show all</small></a></li>
            </ul> </div>
        <div className="card-columns"> {Cards.map((item)=><Card item ={item}/>)} 
        </div>
        </React.Fragment>
        );
    }



}