import React, { Component } from 'react'
import CourseService from '../services/CourseService'

class ViewCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            course: {}
        }
    }

    componentDidMount(){
        CourseService.getCourseById(this.state.id).then( res => {
            this.setState({course: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Course Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Course Id:  </label>
                            <div> { this.state.course.id }</div>
                        </div>
                        <div className = "row">
                            <label> Course Name:  </label>
                            <div> { this.state.course.name }</div>
                        </div>
                        <div className = "row">
                            <label> Description:  </label>
                            <div> { this.state.course.description }</div>
                        </div>
                        <div className = "row">
                            <label> Fee:  </label>
                            <div> { this.state.course.fee }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCourseComponent
