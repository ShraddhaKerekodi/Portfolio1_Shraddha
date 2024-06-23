
const projects = {
    project1: {
        name: "Blood Bank Management",
        description: "Developed and implemented a comprehensive Blood Bank Management System to streamline blood donation, storage, and distribution processes. The system features robust donor management, including registration, eligibility checks, and appointment scheduling, along with efficient inventory management for tracking blood collection, storage conditions, and distribution. Integrated patient information management and a responsive notification system for reminders and alerts. Ensured regulatory compliance and data security while providing detailed reporting and analytics to optimize blood resource management. This project demonstrates proficiency in database management, system design, and healthcare technology solutions.",
        imageUrl: "project1.png" 
    },
    project2: {
        name: "Pathway to Placement",
        description: "A Pathway to Placement project typically aims to bridge the gap between education and employment, ensuring students and job seekers are well-prepared for the job market. To equip participants with the necessary skills, knowledge, and experiences to secure employment.This has information about other websites which are related to placement and profile  page where users can enter their interest. Language used Frontend html css js Backend php mongodb version  control git",
        imageUrl: "project2.jpg"  
    },
    project3: {
        name: "Video Controller using handgesture",
        description: "Developed a cutting-edge hand gesture-controlled video player, leveraging machine learning and computer vision technologies. Utilized a high-resolution camera to capture real-time hand gestures, implemented gesture recognition using TensorFlow and OpenCV, and integrated with a video player's API to map gestures to control commands such as play, pause, fast-forward, and volume adjustment. Ensured robustness across various lighting conditions and included user-friendly features such as visual feedback and calibration options. This project enhanced user experience by providing a touch-free, intuitive interface for video playback",
        imageUrl: "project3.jpg" 
    }
};

function showProject(projectName) {
    const project = projects[projectName];

    if (project) {
        const projectDetails = document.getElementById("project-details");
        projectDetails.innerHTML = `
            <div class="project-details show">
                <h2>${project.name}</h2>
                <img src="${project.imageUrl}" alt="${project.name}" class="project-image">
                <p>${project.description}</p>
            </div>
        `;
    }
}