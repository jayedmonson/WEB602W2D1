const { MongoClient } = require('mongodb');

// Create instance of MongoClient
const client = new MongoClient('mongodb://127.0.0.1:27017/nodemongo');

// Connect to database
client.connect()
    .then(() => {

        console.log('Connected Successfully');

        // Select database
        const dbo = client.db('nodemongo');

        // Query to find document
        const myquery = {
            address: 'Valley 345'
        };

        // Updated values
        const newvalues = {
            $set: {
                name: 'Mickey',
                address: 'Canyon 123'
            }
        };

        // Update one document
        return dbo.collection('customers')
            .updateOne(myquery, newvalues);

    })
    .then((result) => {

        console.log(
            `${result.modifiedCount} document updated`
        );

        client.close();

    })
    .catch((error) => {

        console.log('Failed to connect', error);

        client.close();

    });
