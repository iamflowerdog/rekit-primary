import React from 'react';

class FormSubmit extends React.PureComponent {
  state = {
    name: "",
    error: null
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.state.name) {
      this.setState({ error: "Name is required!"});
      return;
    }

    this.setState(
      {
        error: null,
      },
      () => {
        console.log("Submit success!", this.state);
      }
    );
  };

  handleNameChange = evt => {
    this.setState({
      name: evt.target.value
    });
  };

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={this.state.name} onChange={this.handleNameChange}></input>
        </div>
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default FormSubmit;