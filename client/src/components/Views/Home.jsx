import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
function Home() {


  return (
    <>
      <NavBar />
      <div className='bg-light p-5'>
        <h4 className='feature-title '>Get started</h4>
        <p> Get started today and revolutionize the way you manage projects.   <Link to='/loginpage' > Sign up </Link> for a free trial and experience the power of efficient project collaboration.    Ideal for creative agencies, IT teams, and marketing departments, our project management solution is customizable to suit the demands of diverse projects.</p>
   
        <h4 className='feature-title '>Management:</h4>
        <ul class="list-group">
          <li class="list-group-item " aria-current="true">- Gantt Charts: Visualize project timelines and dependencies with our interactive Gantt charts.</li>
          <li class="list-group-item">- Team Collaboration: Foster teamwork with seamless communication and collaboration tools.</li>
          <li class="list-group-item">- File Sharing: Share and organize project files securely within the platform.</li>
          <li class="list-group-item">- Real-time Updates: Stay informed with instant updates on project progress and milestones.</li>
        </ul>

        <ul class="feature-list">
        <br/>
          <li>
            <span class="feature-title ">Issue Tracking and Resolution:</span>
            <span class="feature-description"> Capture, prioritize, and resolve issues that arise during project execution. Keep an organized log of reported issues and track their resolution status.</span>
          </li>
          <li>
            <span class="feature-title ">Client Collaboration:</span>
            <span class="feature-description"> Facilitate collaboration with clients by providing them with access to relevant project information and updates. Enable clients to provide feedback, review deliverables, and participate in discussions.</span>
          </li>
          <li>
            <span class="feature-title ">Document Versioning:</span>
            <span class="feature-description"> Maintain a history of document revisions and track changes made by team members. Ensure that everyone is working with the latest version of project documents and files.</span>
          </li>
          <li>
            <span class="feature-title ">Risk Management:</span>
            <span class="feature-description"> Identify potential risks and uncertainties that may impact project success. Develop mitigation strategies and contingency plans to address and minimize risks effectively.</span>
          </li>
          <li>
            <span class="feature-title ">Reporting and Analytics:</span>
            <span class="feature-description"> Generate comprehensive reports and analytics to gain insights into project performance, resource utilization, and team productivity. Use data-driven insights to make informed decisions and optimize project outcomes.</span>
          </li>
          <li>
            <span class="feature-title ">User Permissions and Access Control:</span>
            <span class="feature-description"> Define roles and permissions to control access to sensitive project information and functionalities. Ensure that team members have the appropriate level of access based on their roles and responsibilities.</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home

