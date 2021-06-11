import React, { Component } from 'react'
import CourseService from '../services/CourseService';

class UpdateCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            fee: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
    }

    componentDidMount(){
        CourseService.getCourseById(this.state.id).then( (res) =>{
            let course = res.data;
            this.setState({name: course.name,
                description: course.description,
                fee : course.fee
            });
        });
    }

    updateCourse = (e) => {
        e.preventDefault();
        let course = {name: this.state.name, description: this.state.description, fee: this.state.fee};
        console.log('course => ' + JSON.stringify(course));
        console.log('id => ' + JSON.stringify(this.state.id));
        CourseService.updateCourse(course, this.state.id).then( res => {
            this.props.history.push('/courses');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeFeeHandler= (event) => {
        this.setState({fee: event.target.value});
    }

    cancel(){
        this.props.history.push('/courses');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Course</h3>
                                <div className = "card-body">
                                    <form>
                
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fee: </label>
                                            <input placeholder="Fee" name="fee" className="form-control" 
                                                value={this.state.fee} onChange={this.changeFeeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCourse}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCourseComponent
