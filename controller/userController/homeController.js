const userSchema = require("../../model/userSchema");

const home = async (req, res) => {
    try {
        // const userDetails = req.session.user;

        // if (!userDetails) {
        //     return res.redirect('/user/login');
        // }

        const userDetails = await userSchema.findById(req.user.id);

        res.render('user/home', {
            title: "Home",
            user: userDetails,
            alertMessage: []
        });

        // res.render('user/home', {
        //     title: "Home",
        //     user: req.session.user,
        //     alertMessage: req.flash('errorMessage') || []   // ADD THIS
        // })

    } catch (err) {
        console.log(`Error during home page render ${err}`);
    }
}


module.exports={
    home
}