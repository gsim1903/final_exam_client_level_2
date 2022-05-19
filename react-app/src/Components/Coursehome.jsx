import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Coursehome = () => {
  const [courses, setCourse] = useState([])

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
  const CoursesCollection = displayCourses(courses).map((course) => {
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

  return <div>{CoursesCollection}</div>
}

export default Coursehome
