"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Class that serializes a Schema into a normalized object. */
var DataMapper =
/*#__PURE__*/
function () {
  function DataMapper() {
    _classCallCheck(this, DataMapper);
  }

  _createClass(DataMapper, [{
    key: "serialize",

    /**
     * Serialize the query into the an array of objects, as defined by schema.
     * @param {Object[]} query - A set of query results, which is an array of
     * objects containing keys as properties and values from a database query.
     * @param {Schema} schema - The Schema instance describing how to serialize the query.
     * @return {Object[]} An array of objects that is normalized.
     */
    value: function serialize(query, schema) {
      var collection = [];
      var lookup = {}; // Helper function to recursively serialize a row of query data.

      function serializeRow(queryRow, schema, collection, properties, lookup, schemata, relationshipType) {
        var keyCol = schema._keyColumnName;
        var keyVal = queryRow[keyCol];
        var doc, subProps, subSchemata; // The keyCol is null, meaning this was an outer join and there is no
        // related data.

        if (!keyVal) return; // First time encountering this key.  Create a document for it.

        if (lookup[keyVal] === undefined) {
          // If serializing to an array (a many relationship) then make a new
          // document for this row, otherwise the data will be added directly to
          // the collection.
          if (relationshipType === Schema.RELATIONSHIP_TYPE.MANY) doc = {};else doc = collection; // Add each property->column value to the document.

          for (var i = 0; i < properties.length; ++i) {
            if (properties[i].convert) doc[properties[i].propertyName] = properties[i].convert(queryRow[properties[i].columnName]);else doc[properties[i].propertyName] = queryRow[properties[i].columnName];
          } // Add the document to the collection (if serializing to an array).


          if (relationshipType === Schema.RELATIONSHIP_TYPE.MANY) collection.push(doc); // This lookup is used to ensure uniqueness.

          lookup[keyVal] = {
            document: doc,
            lookup: {}
          };
        } else doc = lookup[keyVal].document; // Now serialize each sub schema.


        for (var _i = 0; _i < schemata.length; ++_i) {
          subProps = schemata[_i].schema._properties;
          subSchemata = schemata[_i].schema._schemata; // This sub schemata hasn't been encountered yet.

          if (doc[schemata[_i].propertyName] === undefined) {
            if (schemata[_i].relationshipType === Schema.RELATIONSHIP_TYPE.SINGLE) doc[schemata[_i].propertyName] = {};else doc[schemata[_i].propertyName] = [];
          } // Recurse and serialize the sub schemata.  Note that the lookup for each
          // schema needs to be unique because there could be two schemata at the
          // same level that have key columns with the same value (e.g. a person with
          // product and phone numbers, and phoneNumberID = 1 and productID = 1).


          if (lookup[keyVal].lookup[schemata[_i].propertyName] === undefined) lookup[keyVal].lookup[schemata[_i].propertyName] = {};
          serializeRow(queryRow, schemata[_i].schema, doc[schemata[_i].propertyName], subProps, lookup[keyVal].lookup[schemata[_i].propertyName], subSchemata, schemata[_i].relationshipType);
        }
      } // Serialize each row recursively.


      for (var i = 0; i < query.length; ++i) {
        serializeRow(query[i], schema, collection, schema._properties, lookup, schema._schemata, Schema.RELATIONSHIP_TYPE.MANY);
      }

      return collection;
    }
  }]);

  return DataMapper;
}();

export default DataMapper;
//# sourceMappingURL=DataMapper.js.map
