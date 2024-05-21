const userQueries = {
    createUser: `
    INSERT INTO users(first_name,last_name,username,email,password,login_status)
    VALUES ($1,$2,$3,$4,$5,$6)
    `,
};

module.exports = userQueries;