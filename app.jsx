function Button(props) {
  return (
    <button
      style={{
        padding: "15px 102px",
          backgroundColor: "#47cf73",
            color: "white"
      }}
      onClick={() => {
        props.reset();
      }}
      >
      Reset
    </button>
  );
}

function Question(props) {
  return <h1 style={{ color: "red" }}>{props.question}</h1>;
}
class Choices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          style={{ padding: "15px 102px" }}
          onClick={() =>
      this.props.clickHandler(this.props.options, this.props.counter)}
          >
          {this.props.options}
        </button>
      </div>
    );
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [
        "What is 2+2?",
        "what is 5+5?",
        "what is 6+5?",
        "what is 1+5?",
      ],
      options: [[1, 4, 3, 2], [10, 0, 0, 0], [11, 10, 0, 6], [11, 10, 0, 6]],
      ans: [4, 10, 11, 6],
      correct: 0,
      incorrect: 0,
      counter: 0
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.reset = this.reset.bind(this);
  }
  clickHandler(ans, counter) {
    if (ans == this.state.ans[this.state.counter]) {
      this.setState((prevState, props) => {
        return {
          correct: prevState.correct + 1,
          counter: prevState.counter + 1
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          incorrect: prevState.incorrect + 1,
          counter: prevState.counter + 1
        };
      });
    }
  }
  reset() {
    this.setState({ counter: 0, correct: 0, incorrect: 0 });
  }

  render() {
    return this.state.counter <= 3
      ? <center> 
        <div>
        <Question
          correct={this.state.correct}
          question={this.state.question[this.state.counter]}
          counter={this.state.counter}
          />
        <Choices
          options={this.state.options[this.state.counter][0]}
          clickHandler={this.clickHandler}
          counter={this.state.counter}
          />
        {" "}<br />
        <Choices
          options={this.state.options[this.state.counter][1]}
          clickHandler={this.clickHandler}
          counter={this.state.counter}
          />
        {" "}<br />
        <Choices
          options={this.state.options[this.state.counter][2]}
          clickHandler={this.clickHandler}
          counter={this.state.counter}
          />
        {" "}<br />
        <Choices
          options={this.state.options[this.state.counter][3]}
          clickHandler={this.clickHandler}
          counter={this.state.counter}
          />
        {" "}<br />
        <h1> Correct: {this.state.correct}</h1>
        <h1> Incorrect: {this.state.incorrect} </h1>
        <Button reset={this.reset} />
      </div> </center>
      : <center> <div>
      <h1> Quiz Completed </h1>
      <h1> Correct: {this.state.correct}</h1>
      <h1> Incorrect: {this.state.incorrect} </h1>
      <Button reset={this.reset} />
    </div>
      </center>;
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));
