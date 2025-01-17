
module.exports = function (app) {

	// Test route
	app.get('/api/test', (req, res) => {

		var vertices_obst_lit = [
			0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.5, 0.0, // bottom
			0.0, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, 0.5, 0.5, // top
			0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.5, // left
			0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, 0.5, // right
			0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.0, // back
			0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, // front
		];

		var normals_obst_lit = [
			0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, // bottom
			0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, // top
			-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, // left
			1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, // right
			0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, // back
			0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0  // front
		];

		//if (this.ext_32bit == null) {
		//	var colors_obst_lit = [
		//		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		//		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		//		1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
		//		1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
		//		1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
		//		0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0
		//	];
		//}
		//else {
			var colors_obst_lit = [
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
				1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
				0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0
			];
		//}

		var indices_obst_lit = [
			0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7,
			8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15,
			16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23
		];

		result = {
			meta: {
				status: 'success',
				from: 'test',
				details: ['Getting obst geometry']
			},
			data: {
				vertices_obst_lit: vertices_obst_lit,
				normals_obst_lit: normals_obst_lit,
				colors_obst_lit: colors_obst_lit,
				indices_obst_lit: indices_obst_lit
			}
		}
		res.send(result)
	})

	// Other routes ...

}
