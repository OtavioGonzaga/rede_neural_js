class Matrix {
	constructor(rows, cols) {
		this.rows = rows
		this.cols = cols
		this.data = []
		for (let i = 0; i < rows; i++) {
			let arr = []
			for (let j = 0; j < cols; j++) {
				arr.push(0)
			}
			this.data.push(arr)
		}
	}

	static map(A, B, func) {
		const matrix = new Matrix(A.rows, B.cows)
		matrix.data = matrix.data.map((arr, i) => {
			return arr.map((num, j) => {
				return func(num, i, j)
			})
		})

		return this
	}

	map(func) {
		this.data = this.data.map((arr, i) => {
			return arr.map((num, j) => {
				return func(num, i, j)
			})
		})

		return this
	}

	static ArrayToMatrix(arr) {
		let matrix = new Matrix(arr.length, 1)
		return matrix.map((elm, i, j) => {
			return arr[i]
		})
	}

	print() {
		console.table(this.data)
	}

	randomize() {
		this.map(() => {
			return Math.random() * 2 - 1
		})
	}

	static add(A, B) {
		let AddedMatrix = new Matrix(A.rows, A.cols)

		AddedMatrix.map((num, i, j) => {
			return A.data[i][j] + B.data[i][j]
		})

		return AddedMatrix
	}

	static multiply(A, B) {
		let MultipledMatrix = new Matrix(A.rows, B.cols)

		MultipledMatrix.map((num, i, j) => {
			let sum = 0

			for (let k = 0; k < A.cols; k++) {
				sum += A.data[i][k] * B.data[k][j]
			}

			return sum
		})

		return MultipledMatrix
	}
}