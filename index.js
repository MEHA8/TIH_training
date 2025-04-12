const express=require('express');
const axios=require('axios');
const app=express()
app.get('/', (req, res)=>{
    console.log(req);
    res.send({message : 'Hello kaviya'});
});
async function getProducts(){
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products')
    console.log(response);
    return (await response).data;
}

app.get('/products',async(req,res)=>{
    const products=await getProducts();
    res.send(products);
})
app.get('/products/:id',async(req,res)=>{
    // console.log();
    const products=await getProductsWithId(req.params.id);
    res.send(products);
})

async function getProductsWithId(id){
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products/'+id);
    // console.log(response);
    return (await response).data;
}
const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running in PORT: ${PORT}`);
})