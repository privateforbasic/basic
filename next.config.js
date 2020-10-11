var nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "serverless",

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        child_process: "empty",
        fs: "empty",
        crypto: "empty",
        net: "empty",
        tls: "empty",
        module: "empty",
        dns: "empty",
      };
    }

    return config;
  },
  env: {
    MONGO_DB_URI:
      "mongodb+srv://gogi:h8WhagAWGH24iDxW@basic.8icow.mongodb.net/basic-root?retryWrites=true&w=majority",
    MONGO_DB_NAME: "basic-root",
  },
};
