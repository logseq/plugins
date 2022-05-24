export const isProd = process.env.NODE_ENV === 'production'
export const lspApisEndpoint =
  isProd ? '/apis' : `http://127.0.0.1:8080/interfaces`