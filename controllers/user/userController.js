const pageNotFound = async (req,res) =>{
    try {

        res.render('page-404');

    } catch (error) {

        console.log('Error rendering page not found:', error);
        res.redirect('/pagenotfound');
    }
}



const loadHomePage = async (req, res) => {
    try {

        return res.render('home')

    } catch (error) {
        
        console.log('Error loading home page:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    loadHomePage,
    pageNotFound,
}