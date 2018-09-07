function reverseString(str) {
    // check if string is empty
    if (str === "")
        return ""; // terminates recursion
    else
        return reverseString(str.substr(1)) + str.charAt(0); // each call differnt char at 0 and put it back
}

function leapYear(year) {
    //checks if the 2nd month (February) has 29 days
    return new Date(year, 1, 29).getDate() === 29;
}

function isPangram(string) {
    // Checks with RegEx if the string is a pangram
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
}
