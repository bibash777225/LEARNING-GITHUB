const bookModel=(sequelize,DataTypes)=>{
      const book =sequelize.define("book",{
        bookName:
        {
         type:DataTypes.STRING,
        },
        bookPrice:
        {
                type:DataTypes.INTEGER,
        },
        bookAuthor:
        {
                type:DataTypes.STRING,
        },
        bookGenre:
        {
                type:DataTypes.STRING
        },


     })

     return book;
}
module.exports=bookModel;