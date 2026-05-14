const router = require('express').Router();
const requestService = require('../service/request.js')

router.post('/request', async (request, response) => {
    const { users_id, name_course, start_date, type_pay, end_date } = request.body;
    const requestData = {users_id, name_course, start_date, type_pay, end_date};

    try {
        const createdRequest = await requestService.createRequest(requestData);

        response.status(200).json({
          success: true,
          data: createdRequest
        })
    } catch (error) {
        response.status(500).json({error: error.message});
    }
})

router.post('/request/status', async (request, response) => {
    const {users_id, name_course, status} = request.body;
    const statusData = {users_id, name_course, status};

    try {
        const updatedRequest = await requestService.updateStatus(statusData);

        response.status(200).json({
            success: true,
            data: updatedRequest
        })
    } catch(error) {
        response.status(500).json({error: error.message});
    }
})

router.get('/request', async (req, res) => {
    const {users_id} = req.query

    try {
        const userRequest = await requestService.getRequest(parseInt(users_id));

        res.status(200).json({
            success: true,
            data: userRequest
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

router.get('/request/all', async (req, res) => {
    try{
        const requests = await requestService.getAllRequest()

        res.status(200).json({
            success: true,
            data: requests
        })
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

router.post('/review', async (req, res) => {
    const { users_id, name_course, review } = req.body;
    const reviewData = {users_id, name_course, review};

    try {
        const createdReview = await requestService.createReview(reviewData)

        res.status(200).json({
            success: true,
            data: createdReview
        })
    } catch (error) {
        console.error("Request error:", error);
        res.status(500).json({error: error.message});
    }
})

module.exports = router