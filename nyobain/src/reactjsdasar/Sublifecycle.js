import React, { Component } from "react";

export default class Sublifecycle extends Component {
  componentWillUnmount() {
    this.props.ubahMakanan("Sate");
  }

  //   componentWillUnmount() dipanggil langsung sebelum komponen dilepas dan
  //   dihancurkan. Lakukan pembersihan yang diperlukan, misalnya menghancurkan timer,
  //   membatalkan permintaan jaringan, atau membersihkan semua langganan yang dibuat dalam componentDidMount().

  //   Anda tidak boleh memanggil setState() dalam componentWillUnmount()
  //   karena komponen tidak akan pernah di-render ulang. Segera setelah komponen
  //   dilepas, komponen tersebut tidak akan dipasang kembali.

  render() {
    return (
      <div>
        <h2>Component Sub Lifecycle</h2>
      </div>
    );
  }
}
