const path = require("path");
const AWS = require('aws-sdk');
const config = require(path.join(__dirname, "config.js"));

/**
 * Default credentials defined at the root level of the config.
 */
const defaults = {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.accessKeySecret,
    region: config.region,
};

/**
 * Get the config section associate with the key.
 * @param {string} key Key of the instance, defined in config
 * @return Config section for the instance
 */
const getInstanceConfig = (key) => config.instances[key]

/**
 * Overwrite default credentials with instance credentials.
 * @param {string} Key for the instance, defined in the config
 * @return Credentials for the instance
 */
const getCredentials = (key) => {
    const instanceConfig = getInstanceConfig(key);
    return {
        accessKeyId: instanceConfig.accessKeyId || defaults.accessKeyId,
        secretAccessKey: instanceConfig.accessKeySecret || defaults.secretAccessKey,
        region: instanceConfig.region || defaults.region,
    };
};

module.exports = {
    /**
     * Get the state of the instance.
     * @param {string} key Key for the instance, defined in the config
     * @return {Promise<string>} Promise that resolves to the instance's state.
     */
    state: async (key) => {
        const instanceConfig = getInstanceConfig(key);
        const ec2 = new AWS.EC2(getCredentials(key));
        return ec2.describeInstances({ InstanceIds: [instanceConfig.id] })
            .promise()
            .then(data => {
                const instance = data.Reservations[0]?.Instances[0];
                return instance.State.Name;
            });
    },
};