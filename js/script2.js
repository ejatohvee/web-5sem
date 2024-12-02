document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("meetingForm");
    const meetingsContainer = document.getElementById("meetingsContainer");

    const savedMeetings = JSON.parse(localStorage.getItem("meetings")) || [];
    savedMeetings.forEach(meeting => addMeetingToPage(meeting.name, meeting.description));

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("meetingName").value.trim();
        const description = document.getElementById("meetingDescription").value.trim();

        if (!name || !description) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        addMeetingToPage(name, description);
        saveMeeting(name, description);

        form.reset();
    });

    function addMeetingToPage(name, description) {
        const meetingCard = document.createElement("div");
        meetingCard.classList.add("meeting__card");

        const meetingTitle = document.createElement("h3");
        meetingTitle.textContent = name;

        const meetingDescription = document.createElement("p");
        meetingDescription.textContent = description;

        meetingCard.appendChild(meetingTitle);
        meetingCard.appendChild(meetingDescription);

        meetingsContainer.appendChild(meetingCard);
    }

    function saveMeeting(name, description) {
        const meetings = JSON.parse(localStorage.getItem("meetings")) || [];
        meetings.push({name, description});
        localStorage.setItem("meetings", JSON.stringify(meetings));
    }
});
