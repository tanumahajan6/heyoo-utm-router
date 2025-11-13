import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    let destination = req.query.destination
    if(!destination && process.env.DESTINATION_URL){
        destination = process.env.DESTINATION_URL
    }

    if(!destination){
        return res.status(404).send('Destination URL not found')
    } 

    const queryParams = new URLSearchParams(req.query)
    console.log(queryParams);

    const redirectUrl = queryParams.toString().length > 0 ? `${destination}?${queryParams.toString()}` : destination
    console.log(`Navigating to: ${redirectUrl}`)
    return res.redirect(301, redirectUrl)
})

export default router