import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./cakeAction";

function CakeContainer(props) {
  return (
    <div>
      Number of cakes - {props.numberOfCakes} <br />
      <button onClick={props.buyCake}>Buy</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
