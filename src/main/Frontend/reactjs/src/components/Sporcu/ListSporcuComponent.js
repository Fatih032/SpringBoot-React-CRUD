import React, { Component } from 'react'
import SporcuService from '../../services/SporcuService'
import {withRouter} from '../../services/withRouter';

import "./../../assets/css/Style.css";

class ListSporcuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Sporcu: [],
/*             currentPage: 1,
            sporcuPerPage: 5, */
        }
        this.addSporcu = this.addSporcu.bind(this);
        this.updateSporcu = this.updateSporcu.bind(this);
        this.dltSporcu = this.dltSporcu.bind(this);
    }

    componentDidMount() {
/*         this.findAllSporcu(this.state.currentPage); */
        SporcuService.getAllSporcu().then((res) => {
            this.setState({Sporcu: res.data});
        });
    }

/*     findAllSporcu(currentPage) {
        currentPage -= 1;
        axios
          .get(
            "http://localhost:8081/sporcu?pageNumber=" +
              currentPage +
              "&pageSize=" +
              this.state.sporcuPerPage
          )
          .then((response) => response.data)
          .then((data) => {
            this.setState({
              Sporcu: data.content,
              totalPages: data.totalPages,
              totalElements: data.totalElements,
              currentPage: data.number + 1,
            });
          })
          .catch((error) => {
            console.log(error);
            localStorage.removeItem("jwtToken");
            this.props.history.push("/sporcu");
          });
      }

      changePage = (event) => {
        let targetPage = parseInt(event.target.value);
        if (this.state.search) {
          this.searchData(targetPage);
        } else {
          this.findAllSporcu(targetPage);
        }
        this.setState({
          [event.target.name]: targetPage,
        });
      };

      firstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
          if (this.state.search) {
            this.searchData(firstPage);
          } else {
            this.findAllSporcu(firstPage);
          }
        }
      };

      prevPage = () => {
        let prevPage = 1;
        if (this.state.currentPage > prevPage) {
          if (this.state.search) {
            this.searchData(this.state.currentPage - prevPage);
          } else {
            this.findAllSporcu(this.state.currentPage - prevPage);
          }
        }
      };
    
      lastPage = () => {
        let condition = Math.ceil(
          this.state.totalElements / this.state.booksPerPage
        );
        if (this.state.currentPage < condition) {
          if (this.state.search) {
            this.searchData(condition);
          } else {
            this.findAllSporcu(condition);
          }
        }
      };
    
      nextPage = () => {
        if (
          this.state.currentPage <
          Math.ceil(this.state.totalElements / this.state.booksPerPage)
        ) {
          if (this.state.search) {
            this.searchData(this.state.currentPage + 1);
          } else {
            this.findAllSporcu(this.state.currentPage + 1);
          }
        }
      }; */


    viewSporcu(id) {
        this.props.history.push(`/sporcu-guruntule/${id}`);
    }

    dltSporcu(id) {
        SporcuService.deleteSporcu(id).then((res) => {
            this.setState({Sporcu: this.state.Sporcu.filter(Sporcu => Sporcu.id !== id)});
        });
    }

    addSporcu = (e) => {
        e.preventDefault();
        this.props.history.push('/sporcu-kayit');
    }

    updateSporcu(id) {
        this.props.history.push(`/sporcu-guncelle/${id}`);
    }

  render() {
    return (
        <div>
          <h2 className="text-center">Sporcu Listesi</h2>
          <div style={{float:"left"}}>
            <button onClick={this.addSporcu} className="btn btn-info">Sporcu Ekle</button>
            </div>
            <div>
            <input style={{marginLeft:"700px", marginBottom:"20px", width:"300px", height:"40px"}} type="text" className="form-control" placeholder="Arama..." onChange={event => {
                this.props.setSearchTerm(event.target.value)}} />
            </div>
          <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Soyisim</th>
                        <th>Kulüp</th>
                        <th>SI No</th>
                        <th>Doğum Yılı</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.Sporcu.filter(Sporcu => {
                            if (this.props.searchTerm === "") {
                                return Sporcu;
                            } else if (Sporcu.isim.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || Sporcu.soyisim.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || Sporcu.kulüp.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || Sporcu.sıno.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || Sporcu.dogumtarihi.toLowerCase().includes(this.props.searchTerm.toLowerCase())) {
                                return Sporcu;
                            }
                            return null;
                            }).map( 
                            Sporcu =>
                                <tr key={Sporcu.id}>
                                    <td>{Sporcu.isim}</td>
                                    <td>{Sporcu.soyisim}</td>
                                    <td>{Sporcu.kulüp}</td>
                                    <td>{Sporcu.sıno}</td>
                                    <td>{Sporcu.dogumtarihi}</td>
                                    <td>
                                        <button onClick = { () => {this.updateSporcu(Sporcu.id)}} className="btn btn-success">Güncelle</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => {this.dltSporcu(Sporcu.id)}} className="btn btn-danger">Sil</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => {this.viewSporcu(Sporcu.id)}} className="btn btn-info">Görüntüle</button>
                                    </td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
{/*             {Sporcu.length > 0 ? (
            <Card.Footer>
              <div style={{ float: "left" }}>
                Showing Page {currentPage} of {totalPages}
              </div>
              <div style={{ float: "right" }}>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <Button
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.firstPage}
                    >
                      <FontAwesomeIcon icon={faFastBackward} /> First
                    </Button>
                    <Button
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.prevPage}
                    >
                      <FontAwesomeIcon icon={faStepBackward} /> Prev
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    className={"page-num bg-dark"}
                    name="currentPage"
                    value={currentPage}
                    onChange={this.changePage}
                  />
                  <InputGroup.Append>
                    <Button
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === totalPages ? true : false}
                      onClick={this.nextPage}
                    >
                      <FontAwesomeIcon icon={faStepForward} /> Next
                    </Button>
                    <Button
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === totalPages ? true : false}
                      onClick={this.lastPage}
                    >
                      <FontAwesomeIcon icon={faFastForward} /> Last
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Card.Footer>
          ) : null} */}
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


export default withRouter(ListSporcuComponent);





