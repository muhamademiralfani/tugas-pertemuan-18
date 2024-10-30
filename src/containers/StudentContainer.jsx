import { Component } from 'react';
import StudentTable from '../components/StudentTable';
import StudentForm from '../components/StudentForm';
import StudentDetail from '../components/StudentDetail';

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editingIndex: null,
    students: [],
    currentStudent: {
      name: '',
      birthDate: '',
      nim: '',
      address: '',
      guardian: '',
    },
  };
  componentDidMount() {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      this.setState({ students: JSON.parse(savedStudents) });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
  };

  togleModalForm = (isEdit = false, student = null, index = null) => {
    this.setState({
      isEdit,
      editingIndex: index,
      currentStudent: student ? { ...student } : { name: '', birthDate: '', nim: '', address: '', guardian: '' },
      modalForm: !this.state.modalForm,
    });
  };

  togleModalDetail = (student) => {
    this.setState({ currentStudent: student, modalDetail: !this.state.modalDetail });
  };

  handleAddStudent = (e) => {
    e.preventDefault();
    const { currentStudent, students } = this.state;
    const updatedStudents = [...students, currentStudent];

    this.setState(
      {
        students: updatedStudents,
        modalForm: false,
      },
      () => {
        // Simpan data ke localStorage setelah diperbarui
        localStorage.setItem('students', JSON.stringify(updatedStudents));
      }
    );
  };

  handleEditStudent = (e) => {
    e.preventDefault();
    const { currentStudent, students, editingIndex } = this.state;
    const updatedStudents = [...students];
    updatedStudents[editingIndex] = currentStudent;

    this.setState(
      {
        students: updatedStudents,
        modalForm: false,
        editingIndex: null,
      },
      () => {
        // Simpan data ke localStorage setelah diperbarui
        localStorage.setItem('students', JSON.stringify(updatedStudents));
      }
    );
  };

  handleDeleteStudent = (nim) => {
    const filteredStudents = this.state.students.filter((student) => student.nim !== nim);

    this.setState({ students: filteredStudents }, () => {
      // Simpan data ke localStorage setelah diperbarui
      localStorage.setItem('students', JSON.stringify(filteredStudents));
    });
  };

  render() {
    const { students, modalForm, modalDetail, currentStudent, isEdit } = this.state;

    return (
      <>
        <StudentTable students={students} togleModalForm={this.togleModalForm} togleModalDetail={this.togleModalDetail} handleDeleteStudent={this.handleDeleteStudent} />
        {modalForm && <StudentForm togleModal={this.togleModalForm} student={currentStudent} onChange={this.handleInputChange} isEdit={isEdit} onSubmit={isEdit ? this.handleEditStudent : this.handleAddStudent} />}

        {modalDetail && <StudentDetail togleModal={this.togleModalDetail} student={currentStudent} />}
      </>
    );
  }
}
