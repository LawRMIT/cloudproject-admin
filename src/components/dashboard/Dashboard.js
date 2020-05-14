import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import AddMovie from "../addmovie/AddMovie";

class Dashboard extends Component {
  render() {
    const {auth, profile} = this.props;
    if (auth.uid === process.env.REACT_APP_ADMIN_KEY) {
      return (
        <div className="LogoLogin">
          <div className="container" style={{opacity: 0.97}}>
            <h2 className="center">{profile.userName} Dashboard</h2>
            <AddMovie />
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      );
    } else return <Redirect to="/dashboarderror" />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  firestoreConnect(() => ["Movies"]),
  firestoreConnect(() => ["Locations"]),
  connect(mapStateToProps)
)(Dashboard);
