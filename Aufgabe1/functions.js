function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

function leapYear(year) {
    if (year % 4 === 0)
        if (year % 400 === 0)
            return "This is a leap year";
        else if (year % 100 === 0)
            return "This is no leap year";
        else
            return "This is a leap year";
    else
        return "This is no leap year!";
}

function isPangram(string){
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
}
