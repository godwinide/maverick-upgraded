const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        return res.render("index", { pageTitle: "Welcome", req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/about", (req, res) => {
    try {
        return res.render("about-us", { pageTitle: "Welcome", req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/contact-us", (req, res) => {
    try {
        return res.render("contact-us", { pageTitle: "Welcome", req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/market-data", (req, res) => {
    try {
        return res.render("market-data", { pageTitle: "Welcome", req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/services", (req, res) => {
    try {
        return res.render("index", { pageTitle: "Welcome", req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/faq", (req, res) => {
    try {
        return res.render("faq", { pageTitle: "Welcome", req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});


module.exports = router;