const safetyController = async (req, res) => {

    const data = req.body;        

    const result = await Safety.create(data);

    return res.json(result);
};