placeOrder: function(req, res) {
    
    db.post_order([req.body.total]).then(response => {
        console.log(response)
        db.post_suborder([req.body.user_id, req.body.knife_id, /* pull order ID off response */, req.body.quantity]).then(response => )
    }