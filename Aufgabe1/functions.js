function reverseString(str) {
    // check if string is empty
    if (str === "")
        return ""; // terminates recursion
    else
        return reverseString(str.substr(1)) + str.charAt(0); // each call differnt char at 0 and put it back
}

function leapYear(year) {
    if (year % 4 === 0) // check if year is divadable by 4
        if (year % 400 === 0) // check if year is divadable by 400
            return "This is a leap year";
        else if (year % 100 === 0) // check if year is divadable by 100
            return "This is no leap year";
        else
            return "This is a leap year";
    else
        return "This is no leap year!";
}

function isPangram(string){
    if (/(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)) //regex to check if each char is included in the string
        return string + " is a pangram";
    else
        return string + " is not a pangram";
    //return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
}
