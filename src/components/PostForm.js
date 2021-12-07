import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  submitHandler = event => {
    event.preventDefault();
  };

  changeInputHandler = event => {
    event.persist();
    this.setState(prev => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Post header</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}
