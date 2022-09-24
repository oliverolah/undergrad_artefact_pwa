
// offline data
db.enablePersistence()
.catch(err => {
    if(err.code == 'failed-precondition'){
        // probably multiple tabs opened at once
        console.log('persistence failed');
    } else if(err.code == 'unimplemented'){
        // lack of browser support
        console.log('persistence is not available');
    }
});

// db collection reference
db.collection('courses').onSnapshot((snapshot) => {

    snapshot.docChanges().forEach(change => {
        
        if(change.type === 'added'){
            // add course handler to web page
            renderCourseHandler(change.doc.data(), change.doc.id);
        }
        if(change.type === 'removed'){
            // remove course handler from web page
        }
    });
});

// // db collection reference
// db.collection('courses').onSnapshot((snapshot) => {
//     // console.log(snapshot.docChanges());

//     snapshot.docChanges().forEach(change => {
//         // console.log(change, change.doc.data(), change.doc.id);
//         if(change.type === 'added'){
//             // add course handler to web page
//             renderCourseHandler(change.doc.data(), change.doc.id);
//         }
//         if(change.type === 'removed'){
//             // remove course handler from web page
//         }
//     });
// });
