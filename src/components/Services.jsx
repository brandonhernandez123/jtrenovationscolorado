import react from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'
import asphalt from '../images/asphalt.png'
import barricade from '../images/barricade.png'
import laser from '../images/laser-cutting.png'
import road from '../images/road.png'
import roller from '../images/roller.png'
import construction from '../images/under-construction.png'


const Services = () => {
    return(
        <div className='services'>
            <h2 className='aboutus2'>OUR SERVICES</h2>
            <br/>
            <h6>Here are some of the Services we provide! </h6>
            <br/>
           
            <Container fluid>
                <Row>
                    <Col>
                    
                    <Image fluid  thumbnail className='serviceimage' src="https://media.istockphoto.com/id/1463132842/vector/wrench-in-hand-screwdriver-brush-repair-and-service-sign.jpg?s=612x612&w=0&k=20&c=RBWR7k6jh09E9UDXOqviT9hAaex4qmrqX-6gYPnEGbk=" />
                    <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>GENERAL HANDYMAN WORK</h4>

                    </Col>
                    <Col xs={4}>
                       
                        <Image fluid="true"  thumbnail  className='serviceimage' src="https://media.istockphoto.com/id/1448540546/vector/floor-worker-man-laying-wooden-panel-of-laminate-professional-contractors-installing-a-floor.jpg?s=612x612&w=0&k=20&c=8OyzHxpb6PXxYi5535ag7bmXAnZIqFtTbZngg6zpqaY=" />
 <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>FLOORING</h4>
                    </Col>
                     <Col>
                   
                        <Image fluid="true"  thumbnail className='serviceimage' src='https://media.istockphoto.com/id/970516986/vector/isometric-assembly-of-kitchen-of-furniture-in-the-studio-apartment-concept-repairman-in.jpg?s=612x612&w=0&k=20&c=8JgusOZGZcktjFB3lRT-O9s7HmnhoZU9CYQiGE6AojM=' />
                          <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>KITCHEN RENOVATION</h4>
                     </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                    
                        <Image fluid   thumbnail className='serviceimage' src="https://media.istockphoto.com/id/1176316907/vector/vector-isometric-tiler-laying-tiles.jpg?s=612x612&w=0&k=20&c=PF2HSLj427OVfOYkx4TC3xe7YHY2r3OyFIxdb_DqAA8=" />
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>BATHROOM RENOVATIONS</h4>
                    </Col>
                    <Col>
                  
                        <Image fluid  thumbnail className='serviceimage' src="https://media.istockphoto.com/id/1290998914/vector/workers-in-uniforms-install-windows-man-making-house-or-home-apartment-interior-renovation.jpg?s=612x612&w=0&k=20&c=hbxRSwk3x9h0v47hv-CvnmWyaGvIEQDcOMxeYSb4Z1E=" />
                          <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>WINDOWS / SLIDING PATIO DOORS</h4>
                    </Col>
                    <Col>
                    
                        <Image fluid className='serviceimage'  thumbnail src="https://media.istockphoto.com/id/1158098308/vector/pouring-concrete-web-banner-modern-building.jpg?s=612x612&w=0&k=20&c=EI-RPvCGQpRksZ3LYOAfYHqM4zpaCUANAdgdT8oagM4=" />
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>CONCRETE WORK (DRIVEWAYS AND CUSTOM CONCRETE PATIOS) </h4>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    
                        <Image fluid   thumbnail className='serviceimage' src="https://media.istockphoto.com/id/1341916662/vector/cartoon-young-man-woman-gardener-characters-working-and-gardening-holding-garden-tools.jpg?s=612x612&w=0&k=20&c=yfSVdh0PQxuxR3X796CW2qJm4tiLrbK9czZbmopis88=" />
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg> LANDSCAPING / HARDSCAPING</h4>
                    </Col>
                    <Col>
                  
                        <Image fluid  thumbnail className='serviceimage' src="https://thumbs.dreamstime.com/b/isometric-man-installing-drywall-gypsum-panels-vector-illustration-construction-building-industry-new-home-construction-interior-117471256.jpg" />
                          <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>DRYWALL AND TEXTURE</h4>
                    </Col>
                    <Col>
                    
                        <Image fluid className='serviceimage'  thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nnnQH9tR4P8OjmUVRMg95RR6QvXhMtvSRw&s" />
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
  <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
</svg>FENCING</h4>
                    </Col>
                </Row>
                
            </Container>
        
        </div>
    )
}

export default Services;