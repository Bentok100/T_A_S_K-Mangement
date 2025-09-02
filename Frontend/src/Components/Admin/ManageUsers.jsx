import React from 'react';
import { 
  MDBIcon,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBadge,
  MDBTypography, 
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

// Color palette
const colors = {
  pink: {
    primary: '#ec4899',
    light: '#fce7f3',
    dark: '#db2777'
  },
  violet: {
    primary: '#8b5cf6',
    light: '#ede9fe',
    dark: '#7c3aed'
  },
  teal: {
    primary: '#14b8a6',
    light: '#ccfbf1',
    dark: '#0d9488'
  }
};

const cardStyles = {
  assign: {
    border: 'none',
    borderRadius: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(236, 72, 153, 0.08)',
    background: `linear-gradient(135deg, ${colors.pink.light} 0%, white 100%)`,
    borderTop: `4px solid ${colors.pink.primary}`
  },
  view: {
    border: 'none',
    borderRadius: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.08)',
    background: `linear-gradient(135deg, ${colors.violet.light} 0%, white 100%)`,
    borderTop: `4px solid ${colors.violet.primary}`
  },
  hoverEffects: {
    assign: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(236, 72, 153, 0.15)'
    },
    view: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.15)'
    }
  }
};

const ManageUsers = () => {
  return (
    <MDBContainer className="py-5" style={{ maxWidth: '1200px' }}>
      <MDBTypography tag="h2" className="mb-4 text-center fw-bold" style={{ color: colors.pink.dark }}>
        <MDBIcon fas icon="user-cog" className="me-3" />
        User Management
      </MDBTypography>
      
      <MDBTypography tag="h5" className="mb-5 text-center" style={{ color: colors.violet.dark }}>
        Administrative Control Panel
      </MDBTypography>

      <MDBRow className="g-4 justify-content-center">
        <MDBCol xs="12" md="6" lg="5" xl="4">
          <Link to="/assign-task" className="text-decoration-none">
            <MDBCard 
              className="h-100"
              style={cardStyles.assign}
              onMouseEnter={e => Object.assign(e.currentTarget.style, cardStyles.hoverEffects.assign)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyles.assign)}
            >
              <MDBCardBody className="text-center p-4">
                <div className="icon-wrapper mb-4" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.pink.primary} 0%, ${colors.pink.dark} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 15px ${colors.pink.primary}40`
                }}>
                  <MDBIcon fas icon="plus-circle" size="3x" className="text-white" />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: colors.pink.dark }}>Assign Task</h4>
                <p className="mb-4" style={{ color: '#6b7280' }}>
                  Create and assign new tasks to team members
                </p>
                <MDBBadge 
                  pill 
                  style={{ 
                    background: colors.pink.primary,
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  Quick Assignment
                </MDBBadge>
              </MDBCardBody>
            </MDBCard>
          </Link>
        </MDBCol> 

        <MDBCol xs="12" md="6" lg="5" xl="4">
          <Link to="/assigned-tasks" className="text-decoration-none">
            <MDBCard 
              className="h-100"
              style={cardStyles.view}
              onMouseEnter={e => Object.assign(e.currentTarget.style, cardStyles.hoverEffects.view)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyles.view)}
            >
              <MDBCardBody className="text-center p-4">
                <div className="icon-wrapper mb-4" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.violet.primary} 0%, ${colors.violet.dark} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 15px ${colors.violet.primary}40`
                }}>
                  <MDBIcon fas icon="list-check" size="3x" className="text-white" />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: colors.violet.dark }}>Task Overview</h4>
                <p className="mb-4" style={{ color: '#6b7280' }}>
                  Monitor and manage all assigned tasks
                </p>
                <MDBBadge 
                  pill 
                  style={{ 
                    background: colors.violet.primary,
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  View Dashboard
                </MDBBadge>
              </MDBCardBody>
            </MDBCard>
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ManageUsers;
