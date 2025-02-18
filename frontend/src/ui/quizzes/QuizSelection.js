import { Link } from 'react-router-dom';
import AnimatedTextForQuizSelection from "../utils/AnimatedTextForQuizSelection"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import fushaImage from '../media/fusha-arabic-card-pic.jpg';

export default function QuizSelection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <AnimatedTextForQuizSelection text="Select the language you wish to master!" />
      <Link 
        className="px-6 py-2 text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg bg-blue-500" 
        to="/learning"
      >
        My Learning
      </Link>

      <div class ="row">
        <div class="col-sm-6  d-flex justify-content-center">
          <Card style={{ width: '18rem', marginRight: '1rem' }}>
            <Card.Img variant="top" src={fushaImage} />
            <Card.Body>
              <Card.Title>Fus'ha Arabic</Card.Title>
              <Card.Text>
                Fus'ha or Modern Standard Arabic (MSA) is the variety of standardized, literary Arabic that was developed in the Arab world. 
                Primarily used in literature, academia, print and mass media, law.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div class="col-sm-6  d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fushaImage} />
          <Card.Body>
            <Card.Title>Fus'ha Arabic</Card.Title>
            <Card.Text>
              Fus'ha or Modern Standard Arabic (MSA) is the variety of standardized, literary Arabic that was developed in the Arab world. 
              Primarily used in literature, academia, print and mass media, law.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
}

