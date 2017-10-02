// para el titulo de la pregunta
function Question(props) {
  return <h2 style={{ color: "grey" }}>{props.question}</h2>;
}

// creando mi boton try again
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
      Try again
    </button>
  );
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
      imagen:['img/1.jpg', 'img/2.jpg','img/3.jpg','img/4.jpg'],
      question: [
        "Javascript is _________ language.",
        "Which HTML attribute is used to define inline styles?",
        "What does CSS stand for?",
        "JavaScript is ______ Side Scripting",
      ],
      options: [["Programming", "Application", "Scripting"], ["font", 
      "class", "style"], ["Cascading Style Sheets","Colorful Style Sheets", "Creative Style Sheets"], ["Server", "None of","Browser"]],
      ans: ["Scripting", "style", "Cascading Style Sheets", "Browser"],
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
          imgen={this.state.imagen}
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
{/*        
        {" "}<br />
        {<h1> Correct: {this.state.correct}</h1>}
        {<h1> Incorrect: {this.state.incorrect} </h1>}
        {<Button reset={this.reset} />} */}
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
