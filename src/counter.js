class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount(){
    let counter = localStorage.getItem('counter');

    this.setState(() => ({counter: JSON.parse(counter, 10)}));
  }

  componentDidUpdate(){
    localStorage.setItem('counter', this.state.counter);
  };

  handleAddOne(){
    this.setState(() => ({counter: this.state.counter + 2}));
  }

  handleSubtractOne(){
    this.setState(() => ({counter: this.state.counter - 1}));
  }

  handleReset(){
    this.setState(() => ({counter: 0}));
  }

  render(){
    return (
      <div>

        <p>
          <span> Counter </span>
          <span> {this.state.counter} </span>
        </p>

        <button onClick={this.handleAddOne}> Add </button>
        <button onClick={this.handleSubtractOne}> Subtract </button>
        <button onClick={this.handleReset}> Reset </button>

      </div>
    )
  }
}


  ReactDOM.render(<Counter/>, document.getElementById('app'));
