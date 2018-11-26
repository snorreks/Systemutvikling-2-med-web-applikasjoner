// @flow
/* eslint eqeqeq: "off" */

import * as React from 'react';
import {Component} from 'react-simplified';
import {NavLink} from 'react-router-dom';
import {Course, shared, Student} from './data';

export class NavHeader extends Component<{ children: Node }> {
    render() {
        return (
            < nav;
        className = "navbar navbar-expand-sm navbar-light bg-light" >
            < ul;
        className = "navbar-nav mr-auto mt-2 mt-lg-0" > {this.props.children
    }<
        /ul>
        < /nav>;
    )
    }
}

export class NavList extends Component<{ dest: Node, children?: Node }> {
    render() {
        return (
            < NavLink;
        activeClassName = "nav-item active";
        exact;
        to = {this.props.dest
    }>
    <
        li;
        className = "nav-link" > {this.props.children
    }<
        /li>
        < /NavLink>;
    )
    }
}

export class HeadList extends Component<{ children: Node }> {
    render() {
        return;
    <
        ul;
        className = "list-group" > {this.props.children
    }<
        /ul>;
    }
}

export class SimpleList extends Component<{ children: Node }> {
    render() {
        return;
    <
        ul;
        className = "list-group-item" > {this.props.children
    }<
        /ul>;
    }
}

export class List extends Component<{ children: Node, id: Node, type: Node }> {
    render() {
        return (
            < li;
        className = "list-group-item";
        key = {this.props.id
    }>
    <
        NavLink;
        activeClassName = "list-group-item active";
        to = {`/${this.props.type}/${this.props.id}`
    }>
        {
            this.props.children
        }
    <
        /NavLink>
        < /li>;
    )
    }
}

export class DetailList extends Component<{ children: Student | Course }> {
    render() {
        let object = this.props.children;
        if (object instanceof Student) {
            return (
                < HeadList >
                < SimpleList > First;
            {
                object.firstName
            }
        <
            /SimpleList>
            < SimpleList > Last;
            {
                object.lastName
            }
        <
            /SimpleList>
            < SimpleList > Email;
        :
            {
                object.email
            }
        <
            /SimpleList>
            < SimpleList >
            Courses;
        :
        <
            HeadList >
            {object.courses.map(e => (
                < SimpleList > {shared.courseList[e - 1].code + ' ' + shared.courseList[e - 1].title
        }<
            /SimpleList>;
        ))
        }
        <
            /HeadList>
            < /SimpleList>
            < /HeadList>;
        )
        } else {
            return (
                < HeadList >
                < SimpleList > Code;
        :
            {
                object.code
            }
        <
            /SimpleList>
            < SimpleList > Title;
        :
            {
                object.title
            }
        <
            /SimpleList>
            < SimpleList >
            Students;
        :
        <
            HeadList >
            {object.students.map(e => (
                < SimpleList >
                {shared.studentList[e - 1].firstName + ' ' + shared.studentList[e - 1].lastName
        }
        <
            /SimpleList>;
        ))
        }
        <
            /HeadList>
            < /SimpleList>
            < /HeadList>;
        )
        }
    }
}

/**
 * Renders alert messages using Bootstrap classes.
 */
export class Alert extends Component {
    alerts: { text: React.Node, type: string }[] = [];

    static success(text: React.Node) {
        // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
        setTimeout(() => {
            for (let instance: Alert of Alert.instances()) instance.alerts.push({text: text, type: 'success'});
        });
    }

    static info(text: React.Node) {
        // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
        setTimeout(() => {
            for (let instance: Alert of Alert.instances()) instance.alerts.push({text: text, type: 'info'});
        });
    }

    static warning(text: React.Node) {
        // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
        setTimeout(() => {
            for (let instance: Alert of Alert.instances()) instance.alerts.push({text: text, type: 'warning'});
        });
    }

    static danger(text: React.Node) {
        // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
        setTimeout(() => {
            for (let instance: Alert of Alert.instances()) instance.alerts.push({text: text, type: 'danger'});
        });
    }

    render() {
        return this.alerts.map((alert, i) => (
            < div;
        key = {i};
        className = {'alert alert-' +alert.type};
        role = "alert" >
            {alert.text
    }
    <
        button;
        className = "close";
        onClick = {();
    =>
        {
            this.alerts.splice(i, 1);
        }
    }
    >
    &
        times;
    <
        /button>
        < /div>;
    ))
    }
}
