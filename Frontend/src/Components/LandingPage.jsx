import { useNavigate } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    navigate(`/${role}`);
  };

  return (
    <div className="landing-page-wrapper">
      <div className="landing-background">
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <div className="content-card">
              <div className="card-header">
                <div className="app-icon-container">
                  <img 
                    src="https://img.icons8.com/?size=100&id=XTwDewtklGCW&format=png&color=000000" 
                    alt="App Icon" 
                    className="app-icon"
                  />
                </div>
                <h1 className="app-title">
                  ClearTasks
                  <span className="title-underline"></span>
                </h1>
              </div>
              
              <div className="card-body">
                <h2 className="role-title">Select Your Access Role</h2>
                <p className="role-description">
                  Please choose your access level to proceed—Admin or User. Begin managing tasks efficiently with the role that suits your responsibilities.
                </p>

                <div className="action-buttons">
                  <Button 
                    onClick={() => handleNavigation('login-admin')} 
                    className="role-button admin-role"
                    size="lg"
                  >
                    <span className="button-label">
                      <span className="button-text">Admin Role</span>
                      <span className="button-arrow">→</span>
                    </span>
                    <span className="button-overlay"></span>
                  </Button>
                  
                  <Button 
                    onClick={() => handleNavigation('login-user')} 
                    className="role-button user-role"
                    size="lg"
                  >
                    <span className="button-label">
                      <span className="button-text">User Role</span>
                      <span className="button-arrow">→</span>
                    </span>
                    <span className="button-overlay"></span>
                  </Button>
                </div>
              </div>
              
              <div className="card-footer">
                <p className="footer-text">Streamline your workflow with ClearTasks</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
