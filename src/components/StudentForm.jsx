/* eslint-disable react/prop-types */
// import React from 'react';

const StudentForm = ({ togleModal, student, onChange, isEdit, onSubmit }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>{isEdit ? 'Edit Student' : 'Add New Student'}</h5>
          <button type='button' className='btn-close' onClick={togleModal}></button>
        </div>
        <div className='modal-body'>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input value={student.name} onChange={onChange} type='text' className='form-control' name='name' id='name' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='nim' className='form-label'>
                NIM
              </label>
              <input value={student.nim} onChange={onChange} type='text' inputMode='numeric' pattern='[0-9]*' className='form-control' name='nim' id='nim' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='birthDate' className='form-label'>
                Birth Date
              </label>
              <input value={student.birthDate} onChange={onChange} type='date' className='form-control' name='birthDate' id='birthDate' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='address' className='form-label'>
                Address
              </label>
              <textarea value={student.address} onChange={onChange} className='form-control' name='address' id='address' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='guardian' className='form-label'>
                Guardian Name
              </label>
              <input value={student.guardian} onChange={onChange} type='text' className='form-control' name='guardian' id='guardian' required />
            </div>
            <div className='modal-footer'>
              <button
                type='submit'
                className={`btn ${isEdit ? 'btn-warning' : 'btn-primary'}`} // Warna berbeda untuk Add dan Update
              >
                <i className={isEdit ? 'bi bi-pencil-square' : 'bi bi-save'}></i> {/* Ikon berbeda */}
                {isEdit ? ' Edit' : ' Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
