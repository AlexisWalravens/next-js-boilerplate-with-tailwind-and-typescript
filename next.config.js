module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },

  images: {
    // domains: [process.env.API_URL?.substring(8)]
  }
}
