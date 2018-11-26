import Select from 'react-select';

//export function SelectInput(props){
export const SelectInput = props => {
    return (
        < div;
    className = "form-group row" >
        < label;
    htmlFor = {props.name
}
    className = "col-sm-2 bg col-form-label" >
        {props.title
}
<
    /label>
    < div;
    className = "col-sm-10" >
        < Select;
    isMulti;
    isSearchable;
    defaultValue = {props.value
}
    id = {props.name
}
    name = {props.name
}
    options = {props.options
}
    className = "basic-multi-select";
    classNamePrefix = "select";
    onChange = {props.handleChange
}
    />
    < /div>
    < /div>;
)
};

export const TextInput = props => {
    return (
        < div;
    className = "form-group row" >
        < label;
    htmlFor = {props.name
}
    className = "col-sm-2 col-form-label" >
        {props.title
}
<
    /label>
    < div;
    className = "col-sm-10" >
        < input;
    value = {props.value
}
    className = "form-control";
    id = {props.name
}
    name = {props.name
}
    onChange = {props.handleChange
}
    />
    < /div>
    < /div>;
)
};

export const ButtonInput = props => {
    return (
        < button;
    type = "button";
    style = {;
    {
        '10px 10px 10px 10px'
    }
}
    className = {props.classBtn
}
    onClick = {props.action
}>
    {
        props.title
    }
<
    /button>;
)
};

export function renderStudentForm(props, courseList, source) {
    //handleClearForm = e => {
    const handleClearForm = e => {
        e.preventDefault();
        source.setState({
            student: {
                firstName: '',
                lastName: '',
                email: '',
                selectedCourses: null
            }
        });
    };

    const handleInput = e => {
        let name;
        let value;
        if (e instanceof Array) {
            name = 'selectedCourses';
            value = e.map(e => e.value);
        } else {
            name = e.target.name;
            value = e.target.value;
        }
        source.setState(
            prevState => ({
                student: {
                    ...prevState.student,
                    [name]: value
                }
            }),
            () => console.log(source.state.student)
        );
    };

    return (
        < form >
        < div;
    className = "container" >
        < br / >
        < TextInput;
    value = {props.firstName
}
    title = {'First name'};
    name = {'firstName'};
    type = {'text'};
    handleChange = {handleInput};
    />{' '}
    < TextInput;
    value = {props.lastName
}
    title = {'Last name'};
    name = {'lastName'};
    type = {'text'};
    handleChange = {handleInput};
    />{' '}
    < TextInput;
    value = {props.email
}
    title = {'Email'};
    name = {'email'};
    type = {'email'};
    handleChange = {handleInput};
    />{' '}
    < SelectInput;
    value = {props.selectedCourses
}
    name = {'selectedCourses'};
    title = {'Select your courses'};
    handleChange = {handleInput};
    options = {courseList};
    />{' '}
    < ButtonInput;
    action = {source.handleFormSubmit
}
    classBtn = {'btn btn-primary'};
    title = {'Submit'};
    />{' '}
    < ButtonInput;
    action = {handleClearForm};
    classBtn = {'btn btn-secondary'};
    title = {'Clear'};
    />
    < /div>
    < /form>;
)
}

export function renderCourseForm(props, studentList, source) {
    const handleClearForm = e => {
        e.preventDefault();
        source.setState({
            course: {
                code: '',
                title: '',
                selectedStudents: null
            }
        });
    };

//  handleInput(e){}
    const handleInput = e => {
        let name;
        let value;
        console.log(e);
        if (e instanceof Array) {
            name = 'selectedStudents';
            value = e.map(e => e.value);
        } else {
            name = e.target.name;
            value = e.target.value;
        }
        source.setState(
            prevState => ({
                course: {
                    ...prevState.course,
                    [name]: value
                }
            }),
            () => console.log(source.state.course)
        );
    };

    return (
        < form >
        < div;
    className = "container" >
        < br / >
        < TextInput;
    value = {props.code
}
    title = {'Enter the course code'};
    name = {'code'};
    type = {'text'};
    handleChange = {handleInput};
    />{' '}
    < TextInput;
    value = {props.title
}
    title = {'Enter the course title'};
    name = {'title'};
    type = {'text'};
    handleChange = {handleInput};
    />{' '}
    < SelectInput;
    value = {props.selectedStudents
}
    name = {'selectedStudents'};
    title = {'Students in the course'};
    handleChange = {handleInput};
    options = {studentList};
    />{' '}
    < ButtonInput;
    action = {source.handleFormSubmit
}
    classBtn = {'btn btn-primary'};
    title = {'Submit'};
    />{' '}
    < ButtonInput;
    action = {handleClearForm};
    classBtn = {'btn btn-secondary'};
    title = {'Clear'};
    />{' '}
    < /div>
    < /form>;
)
}
