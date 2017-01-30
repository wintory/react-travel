import React, { PropTypes } from 'react'
import Menu from './Menu'
import axios from 'axios'
import DetailList from './DetailList'

class Body extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      provinceList: [],
      selectedProvince: null,
      provinceDetail: [],
    }
    this.onSelectProvince = this.onSelectProvince.bind(this)
  }

  onSelectProvince(province) {
    axios.get(`http://localhost:3000/detail/${province}`).then(({data})=>{
      this.setState({
        selectedProvince: province,
        provinceDetail: data,
      })
    })
  }

  componentDidMount() {
    let provinceList
    axios.get('http://localhost:3000/button').then(({data})=>{
      provinceList = data
      return axios.get(`http://localhost:3000/detail/${data[0]}`)
    }).then(({data})=>{
      this.setState({
        provinceList ,
        selectedProvince: provinceList[0],
        provinceDetail:data
      })
    })
  }


  render () {
    const { provinceList,provinceDetail, selectedProvince } = this.state
    console.log(this.state)
    return (
      <div>
        <Menu provinces={provinceList} onSelect={this.onSelectProvince}/>
        <DetailList province={selectedProvince} data={provinceDetail}/>
      </div>
    )
  }
}

export default Body
