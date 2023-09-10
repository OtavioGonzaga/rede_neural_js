function Sigmoid(num) {
	return 1 / (1 + Math.exp(-num))
}

class RedeNeural {
	constructor(input_nodes, hidden_nodes, output_nodes) {
		this.input_nodes = input_nodes
		this.hidden_nodes = hidden_nodes
		this.output_nodes = output_nodes

		//BIAS
		this.bias_ItoH = new Matrix(hidden_nodes, 1)
		this.bias_ItoH.randomize()

		this.bias_HtoO = new Matrix(output_nodes, 1)
		this.bias_HtoO.randomize()

		//WHEIGHTS
		this.wheights_ItoH = new Matrix(hidden_nodes, input_nodes)
		this.wheights_ItoH.randomize()

		this.wheights_HtoO = new Matrix(output_nodes, hidden_nodes)
		this.wheights_HtoO.randomize()
	}

	FeedForward(input) {
		input = Matrix.ArrayToMatrix(input)

		let hidden = Matrix.add(Matrix.multiply(this.wheights_ItoH, input), this.bias_ItoH)
		hidden.map(Sigmoid)

		let output = Matrix.add(Matrix.multiply(this.wheights_HtoO, hidden), this.bias_HtoO)
		output.map(Sigmoid)
		output.print()
	}
}
