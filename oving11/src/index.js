// @flow
/* eslint eqeqeq: "off" */

import ReactDOM from 'react-dom';
import * as React from 'react';
import {Component} from 'react-simplified';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import {Course, shared, Student} from './data';
import {Alert, DetailList, HeadList, List, NavHeader, NavList, SimpleList} from './widgets';

import createHashHistory from 'history/createHashHistory';
import {renderCourseForm, renderStudentForm} from './form_widgets';

const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class NavBar extends Component {
    render() {
        return (
            < NavHeader >
            < NavList;
        dest = "/" > React;
        example < /NavList>
        < NavList;
        dest = "/students" > Students < /NavList>
            < NavList;
        dest = "/courses" > Courses < /NavList>
            < /NavHeader>;
    )
    }
}

class Home extends Component {
    render() {
        return;
    <
        div > React;
        example;
        with component state < /div>;
    }
}

class StudentList extends Component {
    render() {
        return (
            < HeadList >
            < SimpleList >
            < h2;
        className = "float-left" > Students < /h2>
            < NavLink;
        className = "float-right btn-lg text-success";
        to = {`/student/add/`
    }>
        Add;
        new student
        < /NavLink>
        < /SimpleList>;
        {
            shared.studentList.map(e => (
                < List;
            id = {e.id
        }
            type = "students" >
                {e.firstName
        }
            {
                e.lastName
            }
        <
            /List>;
        ))
        }
    <
        /HeadList>;
    )
    }
}

class CourseList extends Component {
    render() {
        return (
            < HeadList;
        className = "list-group" >
            < SimpleList >
            < h2;
        className = "float-left" > Courses < /h2>
            < NavLink;
        className = "float-right btn-lg text-success";
        to = {`/course/add/`
    }>
        Add;
        new course
        < /NavLink>
        < /SimpleList>;
        {
            shared.courseList.map(e => (
                < List;
            type = "courses";
            id = {e.id
        }>
            {
                e.code
            }
            {
                e.title
            }
        <
            /List>;
        ))
        }
    <
        /HeadList>;
    )
    }
}

class StudentDetails extends Component<{ match: { params: { id: number } } }> {
    render() {
        let student = shared.studentList.find(e => e.id == this.props.match.params.id);
        if (!student) {
            Alert.danger('Student not found: ' + this.props.match.params.id);
            return null; // Return empty object (nothing to render)
        }
        return (
            < div;
        className = "container" >
            < br / >
            < DetailList > {student} < /DetailList>
            < div;
        className = "row" >
            < div;
        className = "col-sm-2" / >
            < NavLink;
        className = "text-warning btn-lg btn-link col-sm-6";
        to = {`/students/${student.id}/edit`
    }>
        Edit
        < /NavLink>
        < button;
        className = "text-danger btn btn-link btn-lg col-sm-4";
        onClick = {remove} >
            Delete
            < /button>
            < /div>
            < /div>;
    )
    }
}

class CourseDetails extends Component<{ match: { params: { id: number } } }> {
    render() {
        let course = shared.courseList.find(e => e.id == this.props.match.params.id);
        if (!course) {
            Alert.danger('Course not found: ' + this.props.match.params.id);
            return null; // Return empty object (nothing to render)
        }
        return (
            < div;
        className = "container" >
            - < br / >
            < DetailList > {course} < /DetailList>
            < div;
        className = "row" >
            < div;
        className = "col-sm-2" / >
            < NavLink;
        className = "text-warning btn-lg btn-link col-sm-6";
        to = {`/courses/${course.id}/edit`
    }>
        edit
        < /NavLink>
        < button;
        className = "text-danger btn btn-link btn-lg col-sm-4";
        onClick = {();
    =>
        remove(course)
    }>
        Delete
        < /button>
        < /div>
        < /div>;
    )
    }
}

export const remove = object => {
    if (object instanceof Student) {
        shared.courseList.map(c => c.deleteStudent(object.id));
        shared.studentList = shared.studentList.filter(s => s.id !== object.id);
        history.push('/students/');
    } else {
        shared.studentList.map(s => s.deleteCourse(object.id));
        shared.courseList = shared.courseList.filter(c => c.id !== object.id);
        history.push('/courses/');
    }
};

class StudentEdit extends Component<{ match: { params: { id: number } } }> {
    constructor(props) {
        super(props);
        let student = shared.studentList.find(student => student.id == this.props.match.params.id);
        if (!student) {
            Alert.danger('Student not found: ' + this.props.match.params.id);
            return;
        }
        const courseOptions = shared.courseList.map(e => ({value: e.id, label: e.title}));
        const selectedCourses = shared.courseList
            .filter(c => student.courses.find(s => s === c.id))
            .map(e => ({value: e.id, label: e.title}));
        selectedCourses.map(e => console.log(e));
        this.state = {
            student: {
                firstName: student.firstName,
                lastName: student.lastName,
                email: student.email,
                selectedCourses: selectedCourses
            },
            courseOptions
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let selectedStudent = shared.studentList.find(student => student.id == this.props.match.params.id);
        if (!selectedStudent) {
            Alert.danger('Student not found: ' + this.props.match.params.id);
            return;
        }
        const {student} = this.state;

        selectedStudent.firstName = student.firstName;
        selectedStudent.lastName = student.lastName;
        selectedStudent.email = student.email;
        selectedStudent.courses = student.selectedCourses;

        history.push('/students/' + selectedStudent.id);
    }

    render() {
        const {student, courseOptions} = this.state;
        return renderStudentForm(student, courseOptions, this);
    }
}

class StudentAdd extends Component {
    constructor(props) {
        super(props);
        const courseOptions = shared.courseList.map(e => ({value: e.id, label: e.title}));
        this.state = {
            student: {
                firstName: '',
                lastName: '',
                email: '',
                selectedCourses: null
            },
            courseOptions
        };
        //  this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //  this.handleClearForm = this.handleClearForm.bind(this);
    }

    //hva skjer med parameter e?
    handleFormSubmit(e) {
        e.preventDefault();
        shared.studentList.push(
            new Student(
                shared.studentList.length + 1,
                this.state.student.firstName,
                this.state.student.lastName,
                this.state.student.email,
                this.state.student.selectedCourses
            )
        );
        console.log(shared.studentList);
        history.push('/students/' + shared.studentList.length);
    }

    render() {
        const {student, courseOptions} = this.state;
        return renderStudentForm(student, courseOptions, this);
    }
}

class CourseAdd extends Component<{ match: { params: { id: number } } }> {
    constructor(props) {
        super(props);
        const studentOptions = shared.studentList.map(e => ({value: e.id, label: `${e.lastName} ${e.firstName}`}));
        this.state = {
            course: {
                code: '',
                title: '',
                selectedStudents: null
            },
            studentOptions
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        shared.courseList.push(
            new Course(
                shared.courseList.length + 1,
                this.state.course.code,
                this.state.course.title,
                this.state.course.selectedStudents
            )
        );
        console.log(shared.courseList);
        history.push('/courses/' + shared.courseList.length);
    }

    render() {
        const {course, studentOptions} = this.state;
        return renderCourseForm(course, studentOptions, this);
    }
}

class CourseEdit extends Component {
    constructor(props) {
        super(props);
        let course = shared.courseList.find(c => c.id == this.props.match.params.id);
        if (!course) {
            Alert.danger('Course not found: ' + this.props.match.params.id);
            return;
        }
        const studentOptions = shared.studentList.map(e => ({value: e.id, label: `${e.lastName} ${e.firstName}`}));
        const selectedStudents = shared.studentList
            .filter(s => course.students.find(c => c === s.id))
            .map(e => ({value: e.id, label: `${e.lastName} ${e.firstName}`}));
        this.state = {
            course: {
                code: course.code,
                title: course.title,
                selectedStudents: selectedStudents
            },
            studentOptions
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let selectedCourse = shared.courseList.find(c => c.id == this.props.match.params.id);
        if (!selectedCourse) {
            Alert.danger('Student not found: ' + this.props.match.params.id);
            return;
        }
        const {course} = this.state;
        console.log(course.selectedStudents);
        selectedCourse.code = course.code;
        selectedCourse.title = course.title;
        selectedCourse.students = course.selectedStudents;
        history.push('/courses/' + selectedCourse.id);
    }

    render() {
        const {course, studentOptions} = this.state;
        return renderCourseForm(course, studentOptions, this);
    }
}

const root = document.getElementById('root');
if (root)
    ReactDOM.render(
    < HashRouter >
    < div >
    < Alert / >
    < NavBar / >
    < Route;
exact;
path = "/";
component = {Home};
/>
< Route;
path = "/students";
component = {StudentList};
/>
< Route;
exact;
path = "/student/add";
component = {StudentAdd};
/>
< Route;
exact;
path = "/students/:id";
component = {StudentDetails};
/>
< Route;
exact;
path = "/students/:id/edit";
component = {StudentEdit};
/>
< Route;
path = "/courses";
component = {CourseList};
/>
< Route;
exact;
path = "/course/add";
component = {CourseAdd};
/>
< Route;
exact;
path = "/courses/:id";
component = {CourseDetails};
/>
< Route;
exact;
path = "/courses/:id/edit";
component = {CourseEdit};
/>
< /div>
< /HashRouter>,;
root;
)
