const pool = require("../config/db_pgsql");
const queries = require("../sql_queries/newsletter.queries");

// Create a new subscriber
const createSubscriber = async (subscriber) => {
    const { email } = subscriber;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createSubscriber, [ // add SQL query in file
            email
        ]);
        result = data.rowCount;
        console.log(result);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// READ
const getSubscriberByEmail = async (newSubscriber) => {
}

// READ
const getAllSubscribers = async (newSubscriber) => {
}

// DELETE
const deleteSubscriberByEmail = async (newSubscriber) => {
}

const subscriberModel = {
    createSubscriber,
    getSubscriberByEmail,
    getAllSubscribers,
    deleteSubscriberByEmail
}

module.exports = subscriberModel;