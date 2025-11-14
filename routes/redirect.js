import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    let destination = req.query.destination 
    if(!destination && process.env.DESTINATION_URL){
        destination = process.env.DESTINATION_URL // take destination url from .env if it is not provided in query string 
    }

    if(!destination){
        return res.status(404).send('Destination URL not found')
    } 

    const queryParams = new URLSearchParams(req.query)
    queryParams.delete('destination'); // remove destination param
    console.log(queryParams);

    const redirectUrl = queryParams.toString().length > 0 ? `${destination}?${queryParams.toString()}` : destination
    console.log(`Navigating to: ${redirectUrl}`)
    return res.redirect(301, redirectUrl)
})

export default router