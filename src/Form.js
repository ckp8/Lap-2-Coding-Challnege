import React from "React";

class Form extends React.Component {
  state = { nameInput: "" };

  updateInput = (e) => {
    const username = e.target.value;
    this.setState({ nameInput: username });
  };

  handleSubmit = (e) => {};
  render() {
    return (
      <form onSubmit={this.handSubmit}>
        <input
          type="text"
          name="nameInput"
          placeholder="Enter a username..."
          value={this.state.nameInput}
          onChange={this.handleInput}
        />
        <input type="submit" value="Update!" />
      </form>
    );
  }
}

export default Form;
