const router = require("express").Router();
const authService = require("../service/auth.js");

router.post("/reg", async (request, response) => {
    const { login, pass, fio, phone, email } = request.body;
    const newUserData = { login, pass, fio, phone, email };

    try {
        const createdUser = await authService.createUser(newUserData);

        response.status(201).json({
            success: true,
            data: createdUser
        });
    } catch (error) {
        response.status(500).json({error: error.message});
    }
})

router.post("/login", async (request, response) => {
    const { login, pass } = request.body;

    try {
        const user = await authService.getUser(login, pass);

        response.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        response.status(500).json({error: error.message});
    }
})

module.exports = router;