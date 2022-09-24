const courseHandler = document.querySelector('.CourseHandlerBox');

// render Course Handler data
const renderCourseHandler = (data, id) => {


    // HTML embedded template with the data - template string
    const html = `
    
     <div class="course-container" data-id="${id}">
         <img src="/images/guitar-course-logo.jpg" alt="course-logo">
         <div class="course-desc-container">
             <a href="/html/courses/${id}.html">${data.CourseTitle}</a>
             <p>${data.Description}</p>
         </div>
    </div>
    
    `;

    courseHandler.innerHTML += html;
};


  // !!! Do not point to the DB template reference but to the doc source then DB template

    // /html/courses/course-1.html

    // CourseTitle
    
    //  <img src="/images/icons/guitar-64x64.png" data-data="${data.Image}" alt="course-logo">


    // FIRST VERSION
    // <div class="course-container" data-id="${id}">
    //     <img src="/images/guitar-course-logo.jpg" alt="course-logo">
    //     <div class="course-desc-container">
    //         <a href="/html/courses/course-1.html" data-id="${id}">${data.CourseTitle}</a>
    //         <p>${data.Description}</p>
    //     </div>
    // </div>

    
    // <div class="course-container" data-id="${id}">
    //      <img src="/images/guitar-course-logo.jpg" alt="course-logo">
    //      <div class="course-desc-container">
    //          <a href="#" data-id="${id}">${data.CourseTitle}</a>
    //          <p>${data.Description}</p>
    //          <img src="/images/icons/guitar-64x64.png" data-data="${data.Image}" alt="course-logo">
    //      </div>
    // </div>

    // console.log("File name and path is: " + `${data.Image}`);

    // <img src="/images/icons/guitar-64x64.png" data-data="${data.Image}" alt="course-logo">