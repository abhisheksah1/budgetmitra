import Subscriber from "../models/subscriber.model.js";

export async function addSubscriber(req, res) {
    try {
      const { email } = req.body;
  
      if (!email) {
        return res.status(400).json({ message: "Please provide an email" });
      }
  
      const emailExists = await Subscriber.findOne({ email });
  
      if (emailExists) {
        return res.status(400).json({ message: "Email already subscribed" });
      }
  
      const subscriber = new Subscriber({ email });
      await subscriber.save();
      res.status(200).json({ message: "Email subscribed successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to subscribe" });
    }
  }
