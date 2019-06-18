const express = require("express");
const router = express.Router();
const axios = require("axios");

const Search = require("../../models/Search");

// @route 	POST api/search
// @desc 		Search a link for external and internal links
// @access 	Public
router.post("/", async (req, res) => {
  const searchLink = req.body.searchLink;

  const invalidLink = async () => {
    try {
      const newSearch = await new Search({
        searchLink: searchLink,
        validLink: false,
        externalLinks: [],
        internalLinks: []
      });

      const search = await newSearch.save();

      res.json(search);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const alreadySearchedThisLink = await Search.findOne({
    searchLink: searchLink
  });

  if (alreadySearchedThisLink) {
    return res.json(alreadySearchedThisLink);
  } else {
    try {
      await axios.get(searchLink).then(async doc => {
        if (doc.status !== 200) {
          invalidLink();
        } else {
          const internalLinks = doc.data
            .split(" ")
            .filter(item => item.startsWith(`href="/`))
            .map(item => {
              return searchLink && searchLink[searchLink.length - 1] === "/"
                ? { link: searchLink.slice(0, -1) + item.split(`"`)[1] }
                : { link: searchLink + item.split(`"`)[1] };
            });

          const externalLinks = doc.data
            .split(" ")
            .filter(item => item.startsWith(`href="http`))
            .map(item => {
              return { link: item.split(`"`)[1] };
            });

          try {
            const newSearch = await new Search({
              searchLink: searchLink,
              validLink: true,
              externalLinks: externalLinks,
              internalLinks: internalLinks
            });

            const search = await newSearch.save();

            res.json(search);
          } catch (error) {
            res.status(500).send(error.message);
          }
        }
      });
    } catch (err) {
      invalidLink();
    }
  }
});

module.exports = router;
