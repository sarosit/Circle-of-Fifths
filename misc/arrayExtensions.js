

Array.prototype.circularArrayByIndex = function(index) {
    let newArr = [];
    if (index > this.length - 1) {
        throw 'Index is too damn high.'
    }
    for (let i = index; i < this.length; i++) {
        newArr.push(this[i]);
    }
    for (let i = 0; i < index; i++) {
        newArr.push(this[i]);
    }
    return newArr;
}

Array.prototype.circularArray = function(note) {
    let newArr = [];
    if (this.includes(note) === false) {
        throw 'Content not in Array'
    }
    for (let i = this.indexOf(note); i < this.length; i++) {
        newArr.push(this[i]);
    }
    for (let i = 0; i < this.indexOf(note); i++) {
        newArr.push(this[i]);
    }
    return newArr;
}

// export {circularArray, circularArrayByIndex};