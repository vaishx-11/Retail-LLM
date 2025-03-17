const express = require('express');
const router = express.Router();
const getuser = require('../middleware/getuser')
const Note = require("../model/Note");
const { body, validationResult } = require("express-validator");
const mongoose = require('mongoose');


const Feedback = require("../model/Feedback");

// //route 1 this gives the notes  of the loged user
// router.get('/fetchnotes', getuser, async (req, res) => {// this gives the notes  of the loged user
//     try {
//         const notes = await Note.find({ user: req.user.id });
//         res.send(notes)
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Error occured");
//     }
// })

// //route 2 this add the notes  of the loged user

// router.post('/addnote', getuser, [
//     body("title", "enter a valid name").optional().isLength({ min: 6 }),
//     body("description", "enter a valid password").optional().isLength({ min: 6 }),
// ], async (req, res) => {
//     try {
//         const { title, description, tag } = req.body
//         const result = validationResult(req);
//         if (!result.isEmpty()) {
//             return res.send({ errors: result.array() });
//         }

//         const note = new Note({
//             title, description, tag, user: req.user.id
//         })
//         const savednotes = await note.save()
//         res.json(savednotes)
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Error occured");
//     }
// })

// //route 3 this to update the notes  of the loged user

// router.put('/update/:id', getuser, async (req, res) => {
//     try {

//         const { title, description, tag } = req.body
//         const newnote = {};
//         if (title) { newnote.title = title }
//         if (description) { newnote.description = description }
//         if (tag) { newnote.tag = tag }

//         let note = await Note.findById(req.params.id);
//         if (!note) { return res.status(404).send("Not found") }
//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not allowed")
//         }
//         note = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true });//{} shows the object
//         res.json({ note });


//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Error occured");
//     }
// })


// //route 4 this to update the notes  of the loged user

// router.delete('/delete/:id', getuser, async (req, res) => {

//     try {
//         const { title, description, tag } = req.body

//         let note = await Note.findById(req.params.id);
//         if (!note) { return res.status(404).send("Not found") }
//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not allowed")
//         }
//         note = await Note.findByIdAndDelete(req.params.id);//{} shows the object
//         res.json({ "done": "Deleted ", note: note });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Error occured");
//     }
// })

// app.get('/api/products', async (req, res) => {
    //     try {
        //       const products = await db.collection('Product').find({}).toArray();
        //       // console.log('Fetched Products:', products);
        
//       if (!products || products.length === 0) {
    //         // console.log('No products found');
    //         return res.json({});
//       }
  
//       const categoryProducts = {};
//       const maxProductsPerCategory = 40;

//       products.forEach(document => {
    //         // console.log('Document:', document);  // Log each document
    //         for (const [fullCategory, productArray] of Object.entries(document)) {
        //           // console.log('Full Category:', fullCategory);  // Log the full category
        //           // console.log('Product Array:', productArray);  // Log the product array
        
        //           if (Array.isArray(productArray)) {
            //             const topLevelCategory = fullCategory.split('|')[0].trim();
            //             if (!categoryProducts[topLevelCategory]) {
                //               categoryProducts[topLevelCategory] = [];
                //             }
                //             const remainingProductsToAdd = maxProductsPerCategory - categoryProducts[topLevelCategory].length;
                //             if (remainingProductsToAdd > 0) {
                    //               categoryProducts[topLevelCategory].push(...productArray.slice(0, remainingProductsToAdd));
                    //             }
//           } else {
    //             // console.error('Product array is not an array for category:', fullCategory);
    //           }
    //         }
    //       });
    
    //       // console.log('Category Products:', categoryProducts);
    //       res.json(categoryProducts);
//     } catch (error) {
    //       console.error('Error fetching products:', error.message);
    //       res.status(500).json({ message: error.message });
    //     }
    //   });
  


    mongoose.connect('mongodb+srv://hellomintu3:4oqqbxjh8mIb8nh5@cluster0.8rnhjyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000,  // 45 seconds
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

    router.get('/products', async (req, res) => {
        try {
            const products = await db.collection('Product').find({}).toArray();
    
            if (!products || products.length === 0) {
                return res.json({});
            }
    
            const categoryProducts = {};
            const maxProductsPerCategory = 40;
    
            products.forEach(document => {
                for (const [fullCategory, productArray] of Object.entries(document)) {
                    if (Array.isArray(productArray)) {
                        const topLevelCategory = fullCategory.split('|')[0].trim();
                        if (!categoryProducts[topLevelCategory]) {
                            categoryProducts[topLevelCategory] = [];
                        }
                        const remainingProductsToAdd = maxProductsPerCategory - categoryProducts[topLevelCategory].length;
                        if (remainingProductsToAdd > 0) {
                            categoryProducts[topLevelCategory].push(...productArray.slice(0, remainingProductsToAdd));
                        }
                    }
                }
            });
    
            res.json(categoryProducts);
        } catch (error) {
            console.error('Error fetching products:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });
    



    router.post('/feedback', async (req, res) => {
        try {
            const { name, email, message } = req.body;
            
            if (!name || !email || !message) {
                return res.status(400).json({ message: 'All fields are required' });
            }
            
            const feedback = new Feedback({ name, email, message });
            await feedback.save();
            
            res.status(201).json({ message: 'Feedback submitted successfully' });
        } catch (error) {
            console.error('Error submitting feedback:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });

    router.get('/all/feedback', async (req, res) => {
        try {
            const feedbacks = await Feedback.find();
            res.json(feedbacks);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });


    module.exports = router