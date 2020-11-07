import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const hideMenu = router.pathname === '/';
  // const hideCarousel = router.pathname !== '/demo';
  // console.log({router}, {hideMenu}, {hideCarousel})

  return (
    <div>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
