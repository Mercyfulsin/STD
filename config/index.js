const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3211' : 'https://twilio-std.herokuapp.com';