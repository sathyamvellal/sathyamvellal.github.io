class KeySet {
    constructor(keyName) {
        this.keyName = keyName;
    };

    collection(collectionName) {
        var keyName = this.keyName;
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
};

module.exports = KeySet;