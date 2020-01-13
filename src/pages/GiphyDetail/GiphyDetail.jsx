import React, { Component } from 'react';
import { getDataFromLocalStorage } from '../../utils/common';
import './GiphyDetail.scss';

class GiphyDetail extends Component {
  constructor(){
    super();

    this.state = {
      dataGihpy: getDataFromLocalStorage('dataGiphy'),
      import_datetime: undefined,
      title: undefined,
      image: undefined,
    }
  }

  show = () => {
    const { dataGihpy } = this.state;
    const dataProps = this.props;
    console.log('giphydetail',dataProps)
    // console.log('data',dataGihpy[0].id)
    // console.log('giphydetail',dataProps.match.params.id)
    // dataGihpy.forEach(item => {
    //   if (item.id === dataProps.match.params.id){
    //     console.log('ok')
    //   } else {
    //     console.log('no')
    //   }
    // })
    for (var i = 0; i < dataGihpy.length; i++){
      if (dataGihpy[i].id === dataProps.match.params.id){
        console.log('ok')
        this.setState({
          import_datetime: dataGihpy[i].import_datetime,
          title: dataGihpy[i].title,
          image: dataGihpy[i].images.original.url,
        })
      }
    }
  }

  componentDidMount(){
    this.show()
  }
  render(){
    
    const { dataGihpy, import_datetime, title, image } = this.state;
    // console.log(dataGihpy)
    return(
      <div className="giphy-detail">
        { title && 
        <div className="giphy-detail--item">
          <div className="giphy-detail--title">Title:</div>
          <div className="giphy-detail--description">{title}</div>
        </div>
        } 
        { import_datetime && 
        <div className="giphy-detail--item">
          <div className="giphy-detail--title">Import datetime:</div>
          <div className="giphy-detail--description">{import_datetime}</div>
        </div>
        } 
        { image && 
        <div className="giphy-detail--item">
          <div className="giphy-detail--title">Image</div>
          <div className="giphy-detail--description">
            <img src={ image } alt="#"/>
          </div>
        </div>
        } 
      </div>
    )
  }
}

export default GiphyDetail;