const mongoose = require("mongoose");

const SearchSchema = new mongoose.Schema({
  searchLink: {
    type: String,
    max: 255,
    required: true
  },
  validLink: {
    type: Boolean
  },
  externalLinks: [
    {
      link: {
        type: String,
        required: true
      }
    }
  ],
  internalLinks: [
    {
      link: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("search", SearchSchema);
