 import axios from 'axios';  

const COURSE_API_BASE_URL="http://localhost:8080/api/v1/courses";

class CourseService{
    
         getCourses(){
        return axios.get(COURSE_API_BASE_URL);
        }
    
        createCourse(course){
            return axios.post(COURSE_API_BASE_URL, course);
        }
    
        getCourseById(id){
            return axios.get(COURSE_API_BASE_URL + '/' + id);
        }
    
        updateCourse(course, id){
            return axios.put(COURSE_API_BASE_URL + '/' + id, course);
        }
    
        deleteCourse(id){
            return axios.delete(COURSE_API_BASE_URL + '/' + id);
        }
}
    
    

export default new CourseService()