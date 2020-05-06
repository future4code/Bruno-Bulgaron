import React from "react";
import { connect } from "react-redux";
import NewTask from "../NewTask/NewTask";
import AllTasks from "../AllTasks/AllTasks";
import { getTasks } from '../../actions/tasks';

class Planner extends React.Component {

  componentDidMount() {
    this.props.getTasks()
  }
  
  render() {
    return (
      <div>
        <NewTask />
        <hr />
        <AllTasks />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    getTasks: () => dispatch(getTasks())
  }
}

export default connect(null, mapDispatchToProps)(Planner);