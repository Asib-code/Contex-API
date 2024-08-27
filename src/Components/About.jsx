import React ,{useContext}from 'react'
import UserContext from '../Context/UserContext'

const About = () => {

    let {name} = useContext(UserContext);
  return (
    <div> {name}</div>
  )
}

export default About