import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const CourseDisplay = () => {
  const [courses, setCourse] = useState([])
  const { course } = useParams()

  const fetchCourse = async () => {
    const response = await axios.get('/data.js')
    setCourse(response.data.courses)
  }

  useEffect(() => {
    fetchCourse()
  }, [])

  const displayCourses = (courses) => {
    let coursesArray = []
    Object.entries(courses).map((courses) => {
      coursesArray.push(courses[1])
    })
    return coursesArray.flat()
  }

  
  const OneCoursesCollection = displayCourses(courses)
    ?.filter((object) => object['category'] === `${course}`)
    .map((course) => {
      return (
        <div data-cy="course-header">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <h4>Category: {course.category}</h4>
          <p> {course.instructors}</p>
          <p>{course.info}</p>
          <p className="bold"> {course.price}</p>
        </div>
      )
    })

  return (
    <Container text>
      <Link to={`/${course}`}></Link>
      <div data-cy="course-header">
        <h2>{course}</h2>
      </div>
      {OneCoursesCollection}
    </Container>
  )
}

export default CourseDisplay
