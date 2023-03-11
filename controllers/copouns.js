const copounsModel=require("../models/copouns")



function createCopouns(copouns){
  return copounsModel.create(copouns)
}



function getAllcopouns(){
  return todosModel.find()

}









module.exports={createCopouns,getAllcopouns}