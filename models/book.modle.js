const bookModel=(sequelize,DataTypes)=>{
       const book= sequelize.define(" book",{
            Username:
            {
           type:DataTypes.STRING,
           allownull:false
           
            },
           BookAuthor:
           {
            type:DataTypes.STRING
           },
           BookPRICE:{
            type:DataTypes.INTEGER
           }
        })
return book;
}
module.exports=bookModel;