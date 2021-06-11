import React, { Component } from 'react'
import CourseService from '../services/CourseService';

class CreateCourseComponent extends Component {
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
        this.changeFeeHandler = this.changeFeeHandler.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }
            
          
    }
    saveCourse = (c) => {
        c.preventDefault();
        let course = {name: this.state.name, description: this.state.description, fee: this.state.fee};
        console.log('course => ' + JSON.stringify(course));

            CourseService.createCourse(course).then(res =>{
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
                                {
                                    <h2 className="text-center">Add Course</h2>
                                }
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

                                        <button className="btn btn-success" onClick={this.saveCourse}>Save</button>
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

export default CreateCourseComponent