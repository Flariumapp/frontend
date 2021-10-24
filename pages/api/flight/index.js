import buildClient from "../build-client";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const client = buildClient({ req });
            const response = await client.get('flight');

            console.log('flight response', response.data);

            res.status(200).json(response);
        } catch (err) {
            throw err;
        }
    }
}

export default handler;