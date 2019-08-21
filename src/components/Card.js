import React from 'react'


export default class Card extends React.Component {
  render() {
    
    return (
      
        <React.Fragment>
        <div className="card shadow" >
          <div className="frame"> 
        <img className="card-img-top rounded" src={this.props.item.photo} alt="news" />
        <span></span>
        </div>
        <div className="card-body">
          <span ><em> <small> {this.props.item.date}</small></em></span>
          <p className="card-text font-weight-bold my-3">{this.props.item.txt}</p>
        </div>
        </div>
        </React.Fragment>
    )
  }
}
