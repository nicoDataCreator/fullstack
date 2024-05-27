const newsletterQueries = {
    // se insertan todos los datos del cliente en la bbdd
    createSubscriber: `
    INSERT INTO newsletter (email)
    VALUES ($1)
    `
};

module.exports = newsletterQueries;