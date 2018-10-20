module.exports={
    read:(req,res)=>{
        const db = req.app.get('db');
        db.read_houses().then(list=>{
            res.status(200).json(list)
        }).catch(error=>{
            console.error('error in GET /api/houses', error)
        })
    },
    create:(req,res)=>{
        const db = req.app.get('db');
        const {name, address, city, state, zip, image_url, monthly_mortgage, desired_rent} = req.body
        db.create_house([name, address, city, state, zip, image_url, monthly_mortgage, desired_rent]).then(()=>{
            res.status(200).send('YaTa')
        }).catch(error=>{
            console.error("error in POST /api/houses", error)
        })
    },
    delete: (req,res)=>{
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_house(id).then((house)=>{
            res.status(200).send(house);
        }).catch(error=>{
            console.error("error in DELETE /api/houses", error)
        })
    },
    update:(req,res)=>{
        const db = req.app.get('db');
        const {params, query}=req;
        db.update_house([params.id, query.image_url]).then(product=>{
            res.status(200).json(product)
        }).catch(error=>{
            console.error('error in PUT /api/inventory', error)
        })
    }
}