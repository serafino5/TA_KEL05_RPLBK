import React, { Component } from 'react';

class fakebuy extends Component {
    state = {
        kursi: ''
    }
        componentDidMount() {
            alert('Silahkan Mengisi Jumlah Kursi Yang di')
        }
        componentWillUnmount() {
            alert( 'Terima Kasihh')
        }
        shouldComponentUpdate(nextProps, nextState, nextContext) { 
            return window.confirm('Anda Yakin?');
        }
        handleChange = (event) => {
            const {name, value} = event.target
            this.setState((state) => {
                return {
                    [name]: value
                }
            })
        }
    render() {
        return (
            <>
            <div>
                <p>Silahkan Isi Jumlah Kursi</p>
            </div>
            <br />
            <input onChange={this.handleChange} name='kursi'
            value = {this.state.kursi} />
            <br />
            <br />
            <span>
                {this.state.kursi} Kursi Akan Di Sediakan
            </span>
            </>
        );
    }
}

export default fakebuy;