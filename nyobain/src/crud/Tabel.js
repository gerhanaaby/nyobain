import React from "react";
import { Button, Table } from "react-bootstrap";

const Tabel = ({ makanans, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead class="text-center align-middle">
        <tr>
          <th>#</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody class="text-center align-middle">
        {makanans.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp. {makanan.harga}</td>
              <td>
                <Button
                  className="me-3"
                  variant="warning"
                  onClick={() => editData(makanan.id)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => hapusData(makanan.id)}>
                  Hapus
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
