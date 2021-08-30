import _ from 'lodash';

export const myFunction = () => {
    let sampleArray = [1,1,2,2,2,3,4,5,5,6];
    let sortedArray = _.sortedUniq(sampleArray);
    console.log('My resulting array: ' + sortedArray);
}
