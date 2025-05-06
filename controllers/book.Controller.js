exports.fetchBook= async function(req,res){
    const datas=  await book.findAll();
      res.json({
        name:" get book  sucessfully ",
        datas:datas

    })

}

exports.addBook= async function( req,res){

    const { bookName, bookPrice ,bookAuthor,bookGenre}= res.body

      await create.book ({
          bookName,
          bookPrice,
          bookAuthor,
          bookGenre
      })
      res.json({
        name:" book added successfully "
      })
}
exports.deleteBook= async function(req, res){

    res.json({
        name:" delete book sucessfully "
    })
}
exports.editBook= async function(req,res){
     res.json({
        name:" book patch sucessfully "
     })
}
// module.exports={ fetchBook,editBooks,deleteBook,addBook} yesari exports gardha pani 

exports.singleFetchBook= async function(req,res){
    const id=req.params.id //2
    const datas=await book.findByPk(id)//always return objects  
res.json({
    massege: "single book fetched sucessfully",
    datas,
})
    // first capture what id is he/she 
}