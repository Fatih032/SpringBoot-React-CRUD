import React, { Component } from 'react'
import SporcuService from '../../services/SporcuService';
/* import {withRouter} from '../services/withRouter'; */

class ViewSporcuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          id: this.props.match.params.id,
          sporcu: {}

        }
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        SporcuService.getSporcuById(this.state.id).then((res) => {
            this.setState({ sporcu: res.data })
        })
    }

    cancel = () => {
        this.props.history.push('/sporcu');
      }


  render() {
    return (
      <div>
          <div className="card col-md-6 offset-md-3">
            <h3> Sporcu Bilgileri</h3>
            <div className="card-body">
              <div>
                <div >
                <label >Sporcu İsmi : </label>
                  {this.state.sporcu.isim}
                </div>
                <div >
                <label >Sporcu Soyismi : </label>
                  {this.state.sporcu.soyisim}
                </div>
                <div >
                <label >Sporcu Doğum Tarihi : </label>
                  {this.state.sporcu.dogumtarihi}
                </div>
                <div >
                <label >Sporcu Kulüp : </label>
                  {this.state.sporcu.kulüp}
                </div>
                <div >
                <label >Sporcu Sı No : </label>
                  {this.state.sporcu.sıno}
                  </div>
              </div>
            </div>
            <button onClick={this.cancel} className='btn btn-primary'>Cancel</button>
          </div>
          <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
      </div>
    )
  }
}

export default ViewSporcuComponent;
