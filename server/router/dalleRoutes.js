const express=require('express');
const Configuration =require('openai').Configuration
const  OpenAIApi=require('openai').OpenAIApi;
const dotenv=require('dotenv');

dotenv.config();

const configuration = new Configuration({
    organization: "org-T0Xt19b9gszb8Uzqk0acAxlo",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const router=express.Router();

router.get('/',(req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.post('/',async (req, res) => {
    try {
      const { prompt } = req.body;
  
      const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      });
  
      const image = aiResponse.data.data[0].b64_json;
      res.status(200).json({ photo: image });
    } catch (error) {
      console.error(error);
      res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
  });

module.exports=router;