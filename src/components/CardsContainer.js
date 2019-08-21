import React from "react"
import Card from "./Card"
var Cards = require("../Cards.json");

export default class CardContainer extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { filter : "News" };
    
        
      }

      filter(e){
          
      this.setState({filter:(e.target.innerHTML=="show all")?"News":e.target.innerHTML});
      }


    render(){
        
        return (
            <React.Fragment>
        <div id="News" className="menu my-4 w-100 px-2"> <ul className="list-unstyled list-inline text-uppercase px-3 ">
            <li className="list-inline-item "><a href="#" onClick={this.filter.bind(this)}><small className="bold">News</small></a></li>
            <li className="list-inline-item"><a href="#" onClick={this.filter.bind(this)}><small className="bold">2019</small></a></li>
            <li className="list-inline-item"><a href="#" onClick={this.filter.bind(this)}><small className="bold">events</small></a></li>
            <li className="list-inline-item"><a href="#" onClick={this.filter.bind(this)}><small className="bold">2011-2018</small></a></li>
            <li className="list-inline-item float-right"><a href="#" onClick={this.filter.bind(this)}><small className="bold" >show all</small></a></li>
            </ul> </div>
        <div className="card-columns"> {Cards.map((item)=>{if(item.tags.includes(this.state.filter)) return (<Card item ={item}/>) } )} 
        </div>
        </React.Fragment>
        );
    }



}