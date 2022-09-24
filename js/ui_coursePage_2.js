const coursePageHandler_2 = document.querySelector('.courseContentPage_2_box');

// render Course Handler data
// why 'ID' does not work?
const renderCoursePageHandler = (data, id) => {

    // HTML embedded template with the data - template string
    const page_two_html = `
    
        <section data-id="${id}">

            <h2 class="course-header">${data.pHeader}</h2>

            <strong>${data.pSubHeader_1}</strong>
            <p>${data.pPar_1}</p>

            <strong>${data.pSubHeader_1}</strong>
            <ul>
                <li>${data.pListVal_1}</li>
                <li>${data.pListVal_2}</li>
                <li>${data.pListVal_3}</li>
                <li>${data.pListVal_4}</li>
            </ul>

            <video controls>
                <source src="../../videos/VID_2.mp4" type="video/mp4" data-data="${data.pVideo_1}">
            </video>

            <video controls>
                    <source src="../../videos/VID_3.mp4" type="video/mp4" data-data="${data.pVideo_2}">
            </video>

        </section>
    
    `;

    coursePageHandler_2.innerHTML += page_two_html;
}