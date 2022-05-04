function RegistrationValid() {
    let password = document.registration.password;
    let username = document.registration.username;
        if (password_validation(password, 7, 12)) {
            if (allLetter(username)) {
                if (alphanumeric(uadd)) {
                    if (countryselect(ucountry)) {
                        if (allnumeric(uzip)) {
                            if (ValidateEmail(uemail)) {
                                if (validsex(umsex, ufsex)) {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}