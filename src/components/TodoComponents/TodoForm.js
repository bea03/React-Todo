import React from 'react';

class todoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: ''
      }
    }

    handleChanges = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    submitItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.item);
  };

    render(){
      return (

        <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <div>
        <input type="submit" name="submission" value="Add Todo" />
        <input
          type="button"
          name="clearAll"
          value="Clear"
          onClick={() => this.props.clearCompleted()}
        />
        </div>
      </form>

      )
    }
}

export default todoForm;
