/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';

const StudentTable = ({ togleModalForm, togleModalDetail, students, handleDeleteStudent }) => {
  return (
    <div className='table-responsive'>
      <table className='table caption-top table-bordered '>
        <caption>List of Student</caption>
        <thead>
          <tr>
            <th scope='col' className='px-3' colSpan='4'>
              <button className='btn btn-primary float-end fw-bold' onClick={() => togleModalForm(false)}>
                <i className='bi bi-plus-circle'></i> Add New
              </button>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Name</th>
            <th scope='col'>NIM</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.nim}</td>
              <td className='justify-content-center itemcenter'>
                <button className='btn btn-outline-danger btn-sm  float-end' onClick={() => handleDeleteStudent(student.nim)}>
                  <i className='bi bi-trash'></i>
                </button>
                <button className='btn btn-outline-warning btn-sm mx-2 float-end' onClick={() => togleModalForm(true, student, index)}>
                  <i className='bi bi-pencil-square'></i>
                </button>
                <button className='btn btn-outline-primary btn-sm float-end' onClick={() => togleModalDetail(student)}>
                  <i className='bi bi-info-circle'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;

// /* eslint-disable react/prop-types */
// // import React from 'react';

// const StudentTable = ({ students, togleModalForm, togleModalDetail, handleDeleteStudent }) => {
//   return (
//     <div>
//       <button className='btn btn-primary' onClick={() => togleModalForm(false, null)}>
//         Add Student
//       </button>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th scope='col'>Name</th>
//             <th scope='col'>NIM</th>
//             {/* <th scope='col'>Birth Date</th>
//             <th scope='col'>Address</th>
//             <th scope='col'>Guardian</th> */}
//             <th scope='col'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.nim}</td>
//               {/* <td>{student.birthDate}</td>
//               <td>{student.address}</td> */}
//               {/* <td>{student.guardian}</td> */}
//               <td>
//                 <button className='btn btn-info' onClick={() => togleModalForm(true, student)}>
//                   Edit
//                 </button>
//                 <button className='btn btn-danger' onClick={() => handleDeleteStudent(student.nim)}>
//                   Delete
//                 </button>
//                 <button className='btn btn-secondary' onClick={() => togleModalDetail(student)}>
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentTable;
