import react from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-scroll/modules'


const About = () => {
    return(
        <div className='about'>
            <Container fluid>
                <Col>
                 <Row>

   
        <h2 className='aboutus2'>ABOUT US</h2>
        <p className='fill'>Welcome to J.T. Renovations! With over 20 plus years of experience in the industry, Jose Torres is dedicated to providing top-notch home renovations to the Denver Metro area community. 
Contact us today to see how we can help you with your next project!</p>
</Row>
                </Col>
                <h2 className='aboutus2'>WHY CHOOSE US?</h2>
                <Col>
                
<p className='fill'>Highly skilled with effective communication skills, I am bilingual and excel in strong customer service. I am precise with time management and proficient at meeting project deadlines, ensuring quality custom work that satisfies clients' requests and visions. From small projects to major renovations, I have the expertise to tackle any project with precision and care. 

Our commitment is quality workmanship and customer satisfaction sets us apart. You can count on us to get the job done right. </p>
                
                
                </Col>
 
    <br/>
   
  
<Link
          activeClass="active"
          to="section6"
         spy={true}
         smooth={true}
         offset={-100}
         duration={200}>
           <Button className='submit'>
               CONTACT US
          </Button>
          
          </Link>
</Container>
        </div>
    )
}

export default About;