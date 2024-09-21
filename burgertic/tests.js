import bcrypt from 'bcryptjs';

const password = 'oyepe';
const saltRounds = 10;

bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) throw err;

    bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;

        console.log(`Hashed password: ${hash}`);
    });
});