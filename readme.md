# Question
A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
 - N is an integer within the range [1..100,000];
 - string S is made only of lowercase letters (a−z).

# How to run
- Download and open the code in VS Code
- Open integrated terminal in vs code & run the following command 
    > `npm i`
- After npm install completed, run the following command 
    > `node balanced.js`
- Enter an integer to get the fibonacci number at the given position
- Press `ctrl + C` to exit the program

# Implementation Description
The function loops through all possible substrings of S. For each substring, count the number of occurrences of each character within the substring and store it in an object called counts.

After counting, check if the substring is balanced. A substring is considered balanced if it contains exactly two distinct characters, and the number of occurrences of each character is the same. If the substring is balanced, it is added to the result array.

Then, the result array is sorted in descending order by the length of the substrings, and then filtered to return only the substrings with the same length as the longest substring in the array.