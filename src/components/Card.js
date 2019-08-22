import React from 'react'


export default class Card extends React.Component {
  render() {
    
    return (
      
        <React.Fragment>
          <div className="ml-md-0 ml-3 col-12 col-md-4">
        <div className="card  w-100  my-2  shadow" >
          <div className="frame"> 
        <img className="card-img-top rounded" src={this.props.item.photo} alt="news" />
        <div className = "tags">
        {this.props.item.tags.map((tag)=><span className="tag m-1 rounded p-1 "> <small>{tag}</small></span>)} 
        </div>
        </div>
        <div className="card-body">
          <span ><em> <small> {this.props.item.date}</small></em></span>
          <p className="card-text font-weight-bold my-3">{this.props.item.txt}</p>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
  }
}
