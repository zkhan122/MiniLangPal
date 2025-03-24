import { Link } from "react-router-dom";
import AnimatedTextForQuizSelection from "../utils/AnimatedTextForQuizSelection"
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Button} from "react-bootstrap";
import fushaImage from "../media/fusha-arabic-card-pic.jpg";
import cantoneseImg from "../media/cantonese-cover.png";

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
        <div class="col-sm-6  d-flex justify-content-center m-0 p-0">
          <Card style={{ width: '18rem', marginRight: '1rem' }}>
            <Card.Img variant="top" src={fushaImage} />
            <Card.Body>
              <Card.Title>Fus'ha Arabic</Card.Title>
              <Card.Text>
                Fus'ha or Modern Standard Arabic (MSA) is the variety of standardized, literary Arabic that was developed in the Arab world. 
                Primarily used in literature, academia, print and mass media, law.
              </Card.Text>
                <Link to="arabic-diagnostic-quiz/">
                  <Button variant="primary">Start Learning!</Button>
                </Link>
            </Card.Body>
          </Card>
        </div>

        <div class="col-sm-6  d-flex justify-content-center m-0 p-0">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cantoneseImg} />
          <Card.Body>
            <Card.Title>Cantonese</Card.Title>
            <Card.Text>
            Cantonese is a viewed as a vital and inseparable part of the cultural identity for its 
            native speakers across large swaths of southeastern 
            China, Hong Kong and Macau, as well as in overseas communities.
            </Card.Text>
            <Link to="https:///hi">
              <Button variant="primary">Start Learning!</Button>
            </Link>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
}

