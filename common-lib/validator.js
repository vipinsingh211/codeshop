const ROLES_LIST = ['admin', 'seller', 'user'];

function is_valid_role(role) {
    if (role in ROLES_LIST) {
        return role;
    }
    return undefined;
}

function is_valid_email(email) {
    const email_regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (email.match(email_regex)) {
        return true;
    }
    return false;
}

/*
 6 to 100: length
 1 Uppercase
 1 number
 */
function is_valid_pass(pass) {
    if (pass.length < 6) {
        return false;
    }
    if (!pass.match(/[A-Z]+/)) {
        return  false;
    }
    if (!pass.match(/[0-9]+/)) {
        return false;
    }
    return true;
}

module.exports.is_valid_role = is_valid_role;
module.exports.is_valid_email = is_valid_email;
module.exports.is_valid_pass = is_valid_pass;