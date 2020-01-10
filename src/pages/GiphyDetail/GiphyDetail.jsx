import React, { Component } from 'react';
import { getDataFromLocalStorage } from '../../utils/common';

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
    console.log('data',dataGihpy[0].id)
    console.log('giphydetail',dataProps.match.params.id)
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
    console.log(dataGihpy)
    return(
      <div>
        { import_datetime && 
        <div>
          <div>Import datetime</div>
          <div>{import_datetime}</div>
        </div>
        } 
        { title && 
        <div>
          <div>Title</div>
          <div>{title}</div>
        </div>
        } 
        { image && 
        <div>
          <div>Image</div>
          <div><img src={ image } alt="#"/></div>
        </div>
        } 
      </div>
    )
  }
}

export default GiphyDetail;