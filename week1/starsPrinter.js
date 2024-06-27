/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var i = 0;
var myHash = ""
while (i < 7) {
    myHash += "#";
    console.log(myHash);
    i++;
}