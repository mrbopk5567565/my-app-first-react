import React, { Component } from 'react';
import { getDataFromLocalStorage } from '../../utils/common';
import { connect } from 'react-redux'
import './GiphyDetail.scss';

class GiphyDetail extends Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     dataGihpy: getDataFromLocalStorage('dataGiphy'),
  //     import_datetime: undefined,
  //     title: undefined,
  //     image: undefined,
  //   }
  // }

  // show = () => {
  //   const { dataGihpy } = this.state;
  //   const dataProps = this.props;
  //   console.log('giphydetail',dataProps)
  //   // console.log('data',dataGihpy[0].id)
  //   // console.log('giphydetail',dataProps.match.params.id)
  //   for (var i = 0; i < dataGihpy.length; i++){
  //     if (dataGihpy[i].id === dataProps.match.params.id){
  //       console.log('ok')
  //       this.setState({
  //         import_datetime: dataGihpy[i].import_datetime,
  //         title: dataGihpy[i].title,
  //         image: dataGihpy[i].images.original.url,
  //       })
  //     }
  //   }
  // }

  // componentDidMount(){
  //   this.show()
  // }

  handleData = () => {
    const { match, data } = this.props;
    return data.filter( item => item.id === match.params.id )[0];
  }

  render(){
    
    // const { dataGihpy, import_datetime, title, image } = this.state;
    const { title, images, import_datetime } = this.handleData();

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
        { images && 
        <div className="giphy-detail--item">
          <div className="giphy-detail--title">Image</div>
          <div className="giphy-detail--description">
            <img src={ images.original.url } alt="#"/>
          </div>
        </div>
        } 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.giphy.trending.data,
})

export default connect(mapStateToProps)(GiphyDetail);