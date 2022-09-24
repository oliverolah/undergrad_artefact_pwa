const coursePageHandler_1 = document.querySelector('.courseContentPage_1_box');

// render Course Handler data
// why 'ID' does not work?
const renderCoursePageHandler = (data, id) => {

    // HTML embedded template with the data - template string
    const page_one_html = `
    
        <section data-id="${id}">

                <h2 class="course-header" data-id="${id}">${data.pHeader}</h2>

                <strong>${data.pSubHeader_1}</strong>
                <p>${data.pPar1}</p>

                <strong>${data.pSubHeader_2}</strong>
                <ul>
                    <li>${data.pListVal_1}</li>
                    <li>${data.pListVal_2}</li>
                    <li>${data.pListVal_3}</li>
                    <li>${data.pListVal_4}</li>
                </ul>

                <strong>${data.pSubHeader_3}</strong>
                <p>${data.pPar3}</p>

                <strong>${data.pSubHeader_4}</strong>
                <img src="/images/guitar_diagram.jpg" data-data="${data.pImage_1} alt="guitar-diagram">

                <strong>${data.pSubHeader_5}</strong>
                <p>${data.pPar_5}</p>
                <video controls>
                    <source src="../../videos/VID_1.mp4" type="video/mp4" data-data="${data.pVideo_1}">
                </video>

        </section>
    
    `;

    


    // <strong>${data.page1SubHeader2}</strong>
    //     <ul>
    //         <li>${data.page1listVal1}</li>
    //         <li>${data.page1listVal2}</li>
    //         <li>${data.page1listVal3}</li>
    //         <li>${data.page1listVal4}</li>
    //     </ul>

    //     <strong>${data.page1SubHeader3}</strong>
    //     <p>${data.page1SubPar3}</p>
        
    //     <strong>${data.page1listVal4}</strong>
    //     <img src="/images/guitar_diagram.jpg" data-data="${data.page1image1} alt="guitar-diagram">

    //     <strong>${data.page1SubHeader5}</strong>
    //     <p>${data.page1SubPar5}</p>
    //     <video src="#">${data.page1video1}</video>

    // </section>


    coursePageHandler_1.innerHTML += page_one_html ;
}