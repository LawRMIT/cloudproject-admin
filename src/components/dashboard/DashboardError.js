import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class DashboardError extends Component {
  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div style={pagePadding}>
        <h1>Error logging in. </h1>
        <h1>Please use our client website.</h1>
      </div>
    );
  }
}

const pagePadding = {
  paddingBottom: "250px",
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(DashboardError);
