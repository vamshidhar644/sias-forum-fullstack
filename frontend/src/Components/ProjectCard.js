import React from 'react'
import Card from 'react-bootstrap/Card';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ProjectCard = ({projectdata}) => {
  return (
    <Link className='ProjectLink-Card' to='/ProjectSlug'
             state={{
              Project_Title: projectdata.title,
              Project_Image: projectdata.image.asset.url,
              Project_Author: projectdata.author,
              Project_Field: projectdata.field,
              Project_Description: projectdata.description,
              Project_Duration: projectdata.duration,
              Project_Skills: projectdata.skills,
              Project_Fee: projectdata.fee,
              Project_Venue: projectdata.venue,
              Project_Contact: projectdata.contact             
             }}>
            <Card className="text-center Project-Card">
              <Card.Title className="Project-Image">
                <img src={projectdata.image.asset.url} alt="" />
              </Card.Title>
              <Card.Body className="Project-Title">
                <h5>{projectdata.title}</h5>
              </Card.Body>
              <Card.Footer className="ProjectCard-Footer">
                <Card.Text>
                  <h5>
                    Read more
                    <span>
                      {' '}
                      <HiOutlineChevronDoubleRight />
                    </span>
                  </h5>
                </Card.Text>
              </Card.Footer>
            </Card>
            </Link>
  )
}

export default ProjectCard