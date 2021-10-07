const {getItems,getItem,addItem,deleteItem,updateItem} = require('../controllers/items')

//item schema
const Item =  {
    type: 'object',
    properties:{
     id:{type:'string'},
     name:{type:'string'},
},
}
//Options for get allitems
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
        },
    },
},
handler: getItems,
}

const getItemOpts = {
    schema:{
        response:{
            200: Item,
         },
    },
    handler:getItem,
}

const postItemOpts = {
    schema:{
        response:{
            201: Item,
         },
    },
    handler:addItem,
}

const deleteItemOpts = {
    schema:{
        response:{
            200: {
                type: 'object',
                properties:{
                    message:{type:'string'}
                }
            },
         },
    },
    handler:deleteItem,
}
const updateItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
handler: updateItem,
}
function itemRoutes (fastify,options,done)
{
    //Get All items

    fastify.get('/Student',getItemsOpts)
    //Get single items
    fastify.get('/Student/:id',getItemOpts)
    
    //add item
    fastify.post('/Student',postItemOpts)
     //DELETE ITEM

    fastify.delete('/Student/:id',deleteItemOpts)

    //UPDATE ITEMS
    fastify.put('/Student/:id',updateItemOpts)



    done()
}
module.exports = itemRoutes