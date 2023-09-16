const musicDB = require("../db/musicDB")

//get all music
const getMusicAPI = (req, res) => {
	res.status(200).json(musicDB)
}

const getSingleMusic = async (req, res) => {
	const { id } = req.params

	try {
		if (!id) {
			throw Error("A valid Id must be provided")
		}

		if (isNaN(id)) {
			throw Error("Id must be an integer")
		}

		const match = musicDB.filter((music) => {
			return music.id == id
		})
		if (match.length < 1) {
			throw Error("Music not found")
		}
		res.status(200).json({ data: match, success: true })
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message
		})
	}
}

module.exports = {
	getMusicAPI,
	getSingleMusic
}
