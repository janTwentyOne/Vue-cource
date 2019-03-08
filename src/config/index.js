// const baseURL = 'http://localhost:3000' 
export const baseUrl = process.env.NODE_ENV ===  'production'
  ? 'http://production.com/' 
  : 'http://localhost:3001/'