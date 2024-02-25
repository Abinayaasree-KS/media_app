import React, { useState } from "react";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";
import styled from "styled-components";

const Header = (props) => {
  const [showSignOut, setShowSignOut] = useState(false);

  const handleCancelSignOut = () => {
    setShowSignOut(false);
  };

  const handleConfirmSignOut = () => {
    setShowSignOut(false);
    props.signOut();
  };

  return (
    <Container>
      <Content>
        <Logo>
          <div className="active">
            <a href="/home">
              <img src="/images/home-logo.svg" alt="" />
            </a>
          </div>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <button onClick={() => window.location.href = "/home"}>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </button>
            </NavList>

            {/* Other NavList items... */}

            {/* Add other NavList items here */}
            <NavList>
              <button onClick={() => window.location.href = "/network"}>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </button>
            </NavList>

            <NavList>
              <button onClick={() => window.location.href = "/jobs"}>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </button>
            </NavList>

            <NavList>
              <button onClick={() => window.location.href = "/messaging"}>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </button>
            </NavList>

            <NavList>
              <button onClick={() => window.location.href = "/notifications"}>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </button>
            </NavList>

            <User>
              <button onClick={() => setShowSignOut(!showSignOut)}>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>Me</span>
              </button>
              {showSignOut && (
                <SignOutPopup>
                  <button onClick={handleConfirmSignOut}>Sign Out</button>
                  <button onClick={handleCancelSignOut}>Cancel</button>
                </SignOutPopup>
              )}
            </User>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  button {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    &:hover,
    &:active {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 70px;
  }
`;

const SignOutPopup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -105px; /* Adjust the position from bottom */
  right: 30; /* Align with the "Me" button */
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 99;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 12px;
    font-size: 14px;
    transition: background-color 0.3s;
    text-align: left;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const User = styled(NavList)`
  span {
    display: flex;
    align-items: center;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
