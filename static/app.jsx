var FirstComponent = React.createClass({
    render: function() {
        return (<p1>Hello world.</p1>);
    }
});


class Contador extends React.Component {
    
    constructor() {
    	super();
    	this.state = {
    		contador: 0,
    	};
    }

    prev() {
    	if(this.state.contador>0)
    	{
    		this.setState({
    			contador: this.state.contador - 1,
    		});    		
    	}

    }
    itera() {
    	this.nomes = this.props.nome[this.state.contador]
    }

    next() {
    	this.setState({
    		contador: this.state.contador + 1,
    	});
    }
    
    render() {
        return (
        <div>
        	<h1>{this.state.contador}</h1>
        	<h2>{this.nomes}</h2>
        	<div>
        		<button onClick={this.prev.bind(this)}>-</button>
        		<button onClick={this.itera()}>Show</button>
        		<button onClick={this.next.bind(this)}>+</button>
        	</div>
        </div>
        );
    }
}



