import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const CourseDisplay = () => {
  const { course } = useParams()

  debugger
  return (
    <Container text>
      <Link to={`/${course}`}></Link>
      <div data-cy="course-header">
        <h2>{course}</h2>
      </div>
    </Container>
  )
}

export default CourseDisplay
