/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const StudentDetail = ({ togleModal, student }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Student Detail</h5>
          <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={togleModal}></button>
        </div>
        <div className='modal-body'>
          <p>
            <strong>Name: </strong> {student.name}
          </p>
          <p>
            <strong>NIM: </strong> {student.nim}
          </p>
          <p>
            <strong>Birth Date: </strong> {student.birthDate}
          </p>
          <p>
            <strong>Address: </strong> {student.address}
          </p>
          <p>
            <strong>Guardian Name: </strong> {student.guardian}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
