import { ratelimit } from "../config/upstash.config.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");
    if (!success) {
      return res
        .status(429)
        .json({ msg: "Too many request, please try again later!" });
    }

    next();
  } catch (error) {
    console.log(`Rate limit error. \n${error.message}`);
    next();
  }
};

export { rateLimiter };
