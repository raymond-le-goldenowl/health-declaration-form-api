import jwt from 'jsonwebtoken';
import { Auth } from '@/models';
import jwtConfig from '@/config/jwt.config';

const generateAccessToken = payload => {
	return jwt.sign(
		payload,
		jwtConfig.ACCESS_TOKEN_SECRET, // || "your access token secret"
		{ expiresIn: jwtConfig.GENERATE_ACCESS_TOKEN_EXPIRES_IN }
	);
};

const generateRefreshToken = payload => {
	return jwt.sign(
		payload,
		jwtConfig.REFRESH_TOKEN_SECRET, // || "your refresh token secret"
		{ expiresIn: jwtConfig.GENERATE_REFRESH_TOKEN_EXPIRES_IN }
	);
};

const verifyRefreshToken = (
	refreshToken,
	userByRefreshTokenFromDatabase,
	res
) => {
	try {
		const decoded = jwt.verify(
			refreshToken,
			jwtConfig.REFRESH_TOKEN_SECRET //  || "your refresh token secret"
		);
		if (userByRefreshTokenFromDatabase.id !== decoded.id)
			return res.sendStatus(403);

		// const payload = userByRefreshTokenFromDatabase;
		const accessToken = generateAccessToken(userByRefreshTokenFromDatabase);
		return accessToken;
	} catch (err) {
		return res.status(500).json({ success: false, message: err.message });
	}
};

const verifyAccessToken = async (req, res, next) => {
	try {
		const authHeader = req.headers['authorization'];
		if (!authHeader) return res.sendStatus(401);
		const token = authHeader.split(' ')[1];

		const decoded = jwt.verify(token, jwtConfig.ACCESS_TOKEN_SECRET);
		const user = await Auth.findOne({ where: { username: decoded.username } });

		if (user && user.is_active != null) {
			req.user = user;
			return next();
		} else {
			return res.status(401).json({ success: false, message: 'Unauthorize' });
		}
	} catch (err) {
		return res.status(401).json({ success: false, message: 'Invalid token' });
	}
};

export default {
	generateAccessToken,
	generateRefreshToken,
	verifyRefreshToken,
	verifyAccessToken
};
