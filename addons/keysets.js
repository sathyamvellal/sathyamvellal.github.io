class KeySet {
    constructor(keyName) {
        this.keyName = keyName;
        this.collection = this._collection();
    };

    _collection() {
        var keyName = this.keyName;
        return function(collectionName) {
            return function(eleventyCollections) {
                var array = new Array();
                eleventyCollections.getAllSorted().forEach(function(item) {
                    if (item.data[keyName] && item.data[keyName].includes(collectionName)) {
                        array.push(item);
                    }
                });

                return [...array];
            }; // eleventyCollections
        }; // collectionName
    }; // _collection
};

module.exports = KeySet;