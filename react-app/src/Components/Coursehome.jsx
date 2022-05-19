import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Coursehome = () => {
  const [courses, setCourse, ] = useState([])

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
  const CoursesCollection = displayCourses(courses).map((courses) => {
    return <div data-cy="course-header">{courses.title}</div>
  })

  return <div>{CoursesCollection}</div>
}

export default Coursehome
