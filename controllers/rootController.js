/*--home--*/
export const home= async(req,res) => {
    console.log("this is home")
    return res.render("index.html")     
}
