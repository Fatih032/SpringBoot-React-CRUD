import React from 'react'
import SporcuService from '../../services/SporcuService';
/* import {withRouter} from '../services/withRouter'; */
class AddSporcuComponent extends React.Component {      
    constructor(props) {
        super(props);

        this.state = {
            isim: '',
            soyisim: '',
            kulüp: '',
            sıno: '',
            dogumtarihi: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeKulüpHandler = this.changeKulüpHandler.bind(this);
        this.changeSInoHandler = this.changeSInoHandler.bind(this);
        this.changeDogumtarihiHandler = this.changeDogumtarihiHandler.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

      save = (e) => {
        e.preventDefault();
        let sporcu = {isim: this.state.isim, soyisim: this.state.soyisim, kulüp: this.state.kulüp, sıno: this.state.sıno, dogumtarihi: this.state.dogumtarihi};
        console.log('sporcu => ' + JSON.stringify(sporcu));      
          SporcuService.createSporcu(sporcu).then(res => {
            this.props.history.push('/sporcu');
          }); 
      }


      cancel = () => {
        this.props.history.push('/sporcu');
      }

      componentDidMount() {

        if(this.state.id === -1) {
          return 
        } else {
          SporcuService.getSporcuById(this.state.id).then((res) => {
            let sporcu = res.data;
            this.setState({
                isim: sporcu.isim,
                soyisim: sporcu.soyisim,
/*                 email: sporcu.email, */
                kulüp: sporcu.kulüp,
                sıno: sporcu.sıno,
                dogumtarihi: sporcu.dogumtarihi
            });
        });
      }
    }



    changeFirstNameHandler = (event) => {
        this.setState({ isim: event.target.value })
    }

    changeLastNameHandler = (event) => {
        this.setState({ soyisim: event.target.value })
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    changeKulüpHandler = (event) => {
        this.setState({ kulüp: event.target.value })
    }

    changeSInoHandler = (event) => {
        this.setState({ sıno: event.target.value })
    }

    changeDogumtarihiHandler = (event) => {
        this.setState({ dogumtarihi: event.target.value })
    }



render() {
  return (
      <div>
        <br/> <br/>
          <div className='container'>
            <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Sporcu Kayıt</h3>
                <div className='card-body'>
                  <form>
                    <div className='form-group mb-2'>
                      <label className='form-label'>İsim</label>
                      <input type='text' placeholder='İsminizi giriniz... ' className='form-control' value={this.state.isim} onChange={this.changeFirstNameHandler} />
                      </div>
                      <div className='form-group mb-2'>
                      <label className='form-label'>Soyisim</label>
                      <input type='text' placeholder='Soyisminizi giriniz... ' className='form-control' value={this.state.soyisim} onChange={this.changeLastNameHandler} />
                      </div>
{/*                     <div className='form-group mb-2'>
                      <label className='form-label'>Email</label>
                      <input type='text' placeholder='Emaili giriniz' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} /> 
                      </div> */}
                      <div className='form-group mb-2'>
                      <label className='form-label'>Kulüp</label>
                      <input type='text' placeholder='Kulübünüzü giriniz' className='form-control' value={this.state.kulüp} onChange={this.changeKulüpHandler} />
                      </div>
                      <div className='form-group mb-2'>
                      <label className='form-label'>SI No</label>
                      <input type='text' placeholder='SI no giriniz' className='form-control' value={this.state.sıno} onChange={this.changeSInoHandler} />
                      </div>

                      <div className='form-group mb-2'>
                      <label className='form-label'>Doğum Yılı</label>
                      <input type='text' placeholder='Doğum yılınızı giriniz' className='form-control' value={this.state.doğumyılı} onChange={this.changeDogumtarihiHandler} />
                      </div>

                      <button onClick={this.save} className='btn btn-success'>Kaydet</button>
                      <button onClick={this.cancel} className='btn btn-danger' style={{marginLeft: "10px"}}>İptal Et</button>
                  </form>
                </div>
              </div>
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
        </div>
    )
  }
}

export default AddSporcuComponent;

