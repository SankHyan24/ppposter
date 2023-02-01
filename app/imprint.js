const knex = require('knex');
const db = knex({
    client: 'mysql',
    connection: {
        host: 'sc.scitbb.top',
        user: 'sunc',
        password: 'sunc',
        database: 'BS'
    }
})

module.exports = {
    get_imprint: (req, res) => {
        console.log('get_imprint:');
        db.select().from('imprint_post').then(data => {
            data = data.map(
                item => {
                    return {
                        "pid": item.pid,
                        "name": item.name,
                        "email": item.email,
                        "message": item.message,
                        "icon": item.icon
                    }
                })
            res.json(data);
        }).catch(err => res.status(400).json('error getting imprint'));
        console.log('get_imprint: end');
    },

    add_imprint: (req, res) => {
        console.log('add_imprint:');
        const name = req.body.name;
        const email = req.body.email;
        const content = req.body.message;
        const icon = req.body.icon;
        console.log("name: ", name);
        console.log("email: ", email);
        console.log("content: ", content);
        console.log("icon: ", icon);

        db('imprint_post').insert({
            name: name,
            email: email,
            message: content,
            icon: icon
        }).then(() => {
            res.json('add imprint success');
            console.log('add imprint success');
        });
        console.log('add_imprint: end');
    },

    // delete_imprint: (req, res) => {
    // }
}