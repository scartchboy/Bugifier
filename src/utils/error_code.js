module.exports.ErrorCodes = {
	INVALID_USER: {
		success: false,
		statusCode: 422,
		code: 'INVALID_USER',
		message: 'User not found',
	},
	
	INVALID_SORT_VALUE: {
		success: false,
		statusCode: 422,
		code: 'INVALID_SORT_VALUE',
		message: 'Sort values can be only ASC or DSC',
	},
	DUPLICATE_USER: {
		success: false,
		statusCode: 422,
		code: 'DUPLICATE_USER',
		message: 'Email ID / Phone number already exists',
	},
	UNAUTHORIZED_ERROR: {
		success: false,
		statusCode: 401,
		code: 'UNAUTHORIZED_ERROR',
		message: 'Unauthorized Error',
	},
	SESSION_CONFLICT: {
		success: false,
		statusCode: 409,
		code: 'SESSION_CONFLICT',
		message: 'More than 2 session exists',
	},
	INTERNAL_SERVER_ERROR: {
		success: false,
		statusCode: 500,
		code: 'INTERNAL_SERVER_ERROR',
		message: 'Internal Server Error',
	},
	
};