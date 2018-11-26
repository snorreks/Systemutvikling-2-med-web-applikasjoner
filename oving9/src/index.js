// @flow
/* eslint eqeqeq: "off" */

import * as React from 'react';
import {Component} from 'react-simplified';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    courses: number[];

    constructor(id: number, firstName: string, lastName: string, email: string, courses: number[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.courses = courses;
    }
}

class Course {
    id: number;
    code: string;
    title: string;
    students: number[];

    constructor(id: number, code: string, title: string, students: number[]) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.students = students;
    }
}

let students = [
    new Student(1, 'Ola', 'Jensen', 'ola.jensen@ntnu.no', [1, 2, 3]),
    new Student(2, 'Kari', 'Larsen', 'kari.larsen@ntnu.no', [2, 3]),
    new Student(3, 'Per', 'Persen', 'per.larsen@ntnu.no', [3]),
    new Student(4, 'Alex', 'Alexen', 'alex.larsen@ntnu.no', [1, 3]),
    new Student(5, 'Kåre', 'Kåresen', 'kåre.larsen@ntnu.no', [2])
];

let courses = [
    new Course(1, 'TDAT104', 'Matte 1', [1, 4]),
    new Course(2, 'TDAT105', 'Algdat', [1, 2, 5]),
    new Course(3, 'TDAT106', 'Realfag', [1, 2, 3, 4])
];

class NavBar extends Component {
    render() {
        return (
            < nav;
        className = "navbar navbar-expand-lg navbar-light bg-light" >
            < a;
        className = "navbar-brand";
        href = {'/'} >
            < NavLink;
        activeStyle = {;
        {
            'darkblue'
        }
    }
        exact;
        to = "/" >
            React;
        example
        < /NavLink>
        < /a>
        < div;
        className = "collapse navbar-collapse";
        id = "navbarSupportedContent" >
            < ul;
        className = "navbar-nav mr-auto" >
            < li;
        className = "nav-item" >
            < NavLink;
        activeStyle = {;
        {
            'darkblue', padding;
        :
            '5px'
        }
    }
        to = "/students" >
            Students
            < /NavLink>
            < /li>
            < li >
            < NavLink;
        activeStyle = {;
        {
            'darkblue'
        }
    }
        to = "/courses" >
            Courses
            < /NavLink>
            < /li>
            < /ul>
            < /div>
            < /nav>;
    )
    }
}

//<{ children: React.Element <typeof Menu>| React.Element <typeof Home>}>
class Card extends Component {
    render() {
        if (this.props.children instanceof Home) return;
    <
        div;
        className = "card-title" > {this.props.children
    }<
        /div>;
    else
        return;
    <
        ul;
        className = "list-group" > {this.props.children
    }<
        /ul>;
    }
}

class Home extends Component {
    render() {
        return;
    <
        Card;
        title = "React example with static pages" > User;
        input;
        and;
        application;
        state;
        are;
        covered;
        next;
        week. < /Card>;
    }
}

class StudentList extends Component {
    render() {
        return (
            < Card >
            {students.map(e => (
                < li;
        className = "list-group-item";
        key = {e.id
    }>
    <
        NavLink;
        activeClassName = "list-group-item active";
        to = {'/students/' +e.id} >
            {e.firstName
    }
        {
            e.lastName
        }
    <
        /NavLink>
        < /li>;
    ))
    }
    <
        /Card>;
    )
    }
}

class StudentDetails extends Component<{ match: { params: { id: number } } }> {
    render() {
        let className = 'list-group-item';
        let student = students.find(e => e.id == this.props.match.params.id);
        if (!student) {
            console.error('Student not found'); // Until we have a warning/error system (next week)
            return null; // Return empty object (nothing to render)
        }
        return (
            < div;
        className = "card-footer text-muted" >
            < ul;
        className = "list-group" >
            < li;
        className = {className} > First;
        {
            student.firstName
        }
    <
        /li>
        < li;
        className = {className} > Last;
        {
            student.lastName
        }
    <
        /li>
        < li;
        className = {className} > Email;
    :
        {
            student.email
        }
    <
        /li>
        < li;
        className = {className} >
            Courses;
    :
    <
        ul;
        className = "list-group" >
            {student.courses.map(e => (
                < li;
        className = {className} > {courses[e - 1].code + ' ' + courses[e - 1].title} < /li>;
    ))
    }
    <
        /ul>
        < /li>
        < /ul>
        < /div>;
    )
    }
}

class CourseList extends Component {
    render() {
        return (
            < Card >
            < ul >
            {courses.map(e => (
                < li;
        className = "list-group-item";
        key = {e.id
    }>
    <
        NavLink;
        activeClassName = "list-group-item active";
        to = {'/courses/' +e.id} >
            {e.code
    }
        {
            e.title
        }
    <
        /NavLink>
        < /li>;
    ))
    }
    <
        /ul>
        < /Card>;
    )
    }
}

class CourseDetails extends Component<{ match: { params: { id: number } } }> {
    render() {
        let className = 'list-group-item';
        let course = courses.find(e => e.id == this.props.match.params.id);
        if (!course) {
            console.error('Student not found'); // Until we have a warning/error system (next week)
            return null; // Return empty object (nothing to render)
        }
        return (
            < Card >
            < li;
        className = {className} > Code;
    :
        {
            course.code
        }
    <
        /li>
        < li;
        className = {className} > Title;
    :
        {
            course.title
        }
    <
        /li>
        < li;
        className = {className} >
            Students;
    :
    <
        ul;
        className = "list-group" >
            {course.students.map(e => (
                < li;
        className = {className} > {students[e - 1].firstName + ' ' + students[e - 1].lastName} < /li>;
    ))
    }
    <
        /ul>
        < /li>
        < /Card>;
    )
    }
}

const root = document.getElementById('root');
if (root)
    ReactDOM.render(
    < HashRouter >
    < div >
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
path = "/students/:id";
component = {StudentDetails};
/>
< Route;
path = "/courses";
component = {CourseList};
/>
< Route;
path = "/courses/:id";
component = {CourseDetails};
/>
< /div>
< /HashRouter>,;
root;
)
