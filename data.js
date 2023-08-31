// Updated Handles Data Object ****************************************************

let linktreeData = [
  {
    id: 1,
    handleName: "Chapter",
    handleText: "Become a Member",
    handleLink: "https://gdsc.community.dev/poornima-university-jaipur/",
    imgSrc: "./assets/community.svg",
    imgAlt: "Community",
  },
  {
    id: 3,
    handleName: "LinkedIn",
    handleText: "Connect Us & Stay Update",
    handleLink:
      "https://www.linkedin.com/in/gdsc-poornima-university-34696528a/",
    imgSrc: "./assets/linkedin.svg",
    imgAlt: "LinkedIn",
  },
  {
    id: 4,
    handleName: "Youtube",
    handleText: "Subscribe to Our Channel",
    handleLink: "https://www.youtube.com/@GDSCPoornimaUniversity-qf7fw",
    imgSrc: "./assets/youtube.svg",
    imgAlt: "Youtube",
  },
  {
    id: 5,
    handleName: "Instagram",
    handleText: "Follow Us & Stay Update",
    handleLink: "https://instagram.com/gdsc.poornima?igshid=NjIwNzIyMDk2Mg==",
    imgSrc: "./assets/instagram.svg",
    imgAlt: "Instagram",
  },
  {
    id: 6,
    handleName: "Github",
    handleText: "Collab with us in Our Projects",
    handleLink: "https://github.com/gdsc-Poornima-University",
    imgSrc: "./assets/github.svg",
    imgAlt: "Github",
  },
  {
    id: 9,
    handleName: "Website",
    handleText: "Official Website",
    handleLink: "https://gdsc-poornima-university.github.io/GDSC-PU-Linktree/",
    imgSrc: "./assets/website.svg",
    imgAlt: "Website",
  },
  {
    id: 10,
    handleName: "Mail Us",
    handleText: "Feel Free to Contact Us",
    handleLink: "mailto:gdsc.poornimauniversity@gmail.com",
    imgSrc: "./assets/mail.svg",
    imgAlt: "Mail",
  },
];

// Updated Handles Preview Mapping ****************************************************

let linktreeDiv = document.querySelector("#linktreeHandles");

Object.values(linktreeData).map((val) => {
  linktreeDiv.innerHTML += `
        <!-- Social Handle ${val.id} -->
        <div class="handle_card">
            <span><img src="${val.imgSrc}" class="watermark" alt="Watermark" /></span>
            <img src="${val.imgSrc}" alt="${val.imgAlt}" />
            <p>${val.handleText}</p>
            <a href="${val.handleLink}" target="_blank" rel="noopener">
                ${val.handleName}
            </a>
        </div>
    `;
});
