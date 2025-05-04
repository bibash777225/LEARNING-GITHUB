 const { Sequelize, DataTypes} =require("sequelize")


  const sequelize = new Sequelize("postgresql://postgres.ydlidlickuhnqcadvniv:bibash9848766004@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")






 sequelize.authenticate()
  .then( ()=>{
    console.log(" error not found succescully fetched")

  })
    .catch( (err)=>{
     console.log(" error ayou:"+ err)
    })
    const db={}
    db.sequelize=sequelize;
    db.Sequelize=Sequelize;

    db.book=require("../models/book.modle")(sequelize,DataTypes)
    sequelize.sync({alert:false})
    .then(()=>
    {
console.log('MIGRATE VAYOU HAI TAH SATHI')
    })
      module.eport=db