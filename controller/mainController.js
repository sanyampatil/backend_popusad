import { yojanaoneModelsample } from '../postgress/postgress.js'

const getInfo = async (req, res) => {
  console.log('body', req.body)
  const { username, village } = req.body

  try {
    // const username = 'योगेश मारोती आत्राम'

    if (!username || !village) {
      res.status(400).json({
        success: 'false',
        msg: 'username and vilage is required '
      })
    }
    // const query = 'SELECT * FROM  yojnaOneChota WHERE username = $1'

    const userinfo = await yojanaoneModelsample.findOne({
      where: { username: username, village: village }
    })
    console.log('USERINFO', userinfo)

    // if (userinfo.length == null) {
    //   return res.status(200).json({
    //     msg: 'user not found'
    //   })
    // }
    return res.status(200).json(userinfo)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'internal server error'
    })
  }
}

export { getInfo }
