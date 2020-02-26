/* eslint-disable prettier/prettier */
const startCodeV = 103;
const startCodeU = 104;
let bcV = [48, 42, 42, 0, 0, 19, 35];
let bcU = [90, 18, 43, 0, 0, 81, 58];

let checksumV = 54;
let checksumU = 36;

let checksum = checksumV;
let startcode = startCodeV;
let data = bcV;

let construct = startcode;
let testValue1 = 1;
let testValue2 = 1;


while (testValue1 < 128) {
    while (testValue2 < 128) {
        for (let i = 0; i < data.length; i++) {
            if (i === 3) {
                construct += (testValue1 * (i + 1));
            }
            else if (i === 4) {
                construct += (testValue2 * (i + 1));
            }
            else {
                construct += (data[i] * (i + 1));
            }
        }
        if (construct % 103 === checksum) {
            console.log("Value 1 is", testValue1);
            console.log("Value 2 is", testValue2);
        }
        construct = startcode;
        testValue2++;
    }
    testValue2 = 0;
    testValue1++;
}