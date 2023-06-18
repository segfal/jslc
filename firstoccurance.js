
const strStr = (haystack, needle) => {
    if (needle.length === 0) return 0;
    let i = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[0]) {
        let j = 0;
        while (j < needle.length) {
            if (haystack[i + j] !== needle[j]) break;
            j++;
        }
        if (j === needle.length) return i;
        }
        i++;
    }
    return -1;
    }


module.exports = strStr
